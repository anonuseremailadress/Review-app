import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Comment {
  documentRef: string;
  user: string;
  timestamp: string;
  content: string;
}

interface AddCommentProps {
  documentRef: string;
  onPost?: (comment: Comment) => void;
}

const AddComment: React.FC<AddCommentProps> = ({ documentRef, onPost }) => {
  const [showInput, setShowInput] = useState(false);
  const [value, setValue] = useState("");

  const handlePost = () => {
    if (!value.trim()) return;
    const newComment: Comment = {
      documentRef,
      user: "You",
      timestamp: new Date().toLocaleString(),
      content: value.trim(),
    };
    if (typeof onPost === "function") {
      onPost(newComment);
    }
    setValue("");
    setShowInput(false);
  };

  return (
    <div className="space-y-3">
      {!showInput && (
        <Button
          className="bg-[#FDBD30] text-black rounded-full px-3 py-1 text-sm"
          onClick={() => setShowInput(true)}
        >
          Add New Comment +
        </Button>
      )}

      {showInput && (
        <div>
          <Textarea
            className="w-full border rounded p-2 text-sm"
            placeholder="Write your comment..."
            rows={3}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setValue(e.target.value)}
          />
          <Button
            onClick={handlePost}
            className="mt-2 bg-green-600 text-white hover:bg-green-700"
          >
            Post
          </Button>
        </div>
      )}
    </div>
  );
};

export default AddComment;

