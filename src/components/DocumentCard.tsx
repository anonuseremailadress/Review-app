import React from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface DocumentCardProps {
  name: string;
  reference: string;
  date: string;
  uploader: string;
  status: string;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ name, reference, date, uploader, status }) => {
  return (
    <div className="flex items-center justify-between bg-white shadow-sm border rounded-lg px-4 py-3">
      <div className="flex items-center gap-4">
        <Checkbox />
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-gray-500">
            Ref: {reference} · Uploaded: {date} · By: {uploader}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">{status}</span>
        <Button variant="outline" className="bg-black text-white hover:bg-gray-800">Review</Button>
      </div>
    </div>
  );
};

export default DocumentCard;
