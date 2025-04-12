import React, { useState } from "react";
import AddComment from "./AddComment";
import { Pin } from "lucide-react";

interface Comment {
  documentRef: string;
  user: string;
  timestamp: string;
  content: string;
}

interface CommentsPanelProps {
  documentRef: string;
}

const CommentsPanel: React.FC<CommentsPanelProps> = ({ documentRef }) => {
  const [comments, setComments] = useState<Comment[]>([
    {
      documentRef,
      user: "Jane Smith",
      timestamp: "11 Apr 2025 09:20",
      content: "Please check the total amount.",
    },
  ]);

  const handlePost = (comment: Omit<Comment, "documentRef">) => {
    setComments((prev) => [
      { ...comment, documentRef },
      ...prev,
    ]);
  };

  return (
    <div className="space-y-4">
      <AddComment onPost={handlePost} />
      <div className="space-y-3 text-sm mt-2">
        {comments
          .filter((c) => c.documentRef === documentRef)
          .map((c, i) => (
            <div key={i} className="border p-3 rounded bg-gray-50">
              <div className="flex justify-between items-center">
                <div>
                  <strong>{c.user}</strong> · {c.timestamp}
                </div>
                <Pin className="w-4 h-4 text-gray-400 cursor-pointer hover:text-[#FDBD30]" />
              </div>
              <div className="mt-1">{c.content}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommentsPanel;
