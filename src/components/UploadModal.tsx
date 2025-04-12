import React from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, Loader2, CheckCircle } from "lucide-react";

const UploadModal = () => {
  const [files, setFiles] = React.useState<FileList | null>(null);
  const [uploading, setUploading] = React.useState(false);
  const [uploaded, setUploaded] = React.useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
    setUploaded(false);
  };

  const handleUpload = () => {
    if (!files || files.length === 0) return;
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      setUploaded(true);
    }, 2000); // fake delay
  };

  const handleReset = () => {
    setFiles(null);
    setUploaded(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#FDBD30] text-black rounded-full px-4 flex items-center gap-1">
          <Upload className="w-4 h-4" /> Upload Documents +
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upload Documents</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          {!uploaded && (
            <>
              <Input type="file" multiple accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" onChange={handleFileChange} />
              {files && (
                <ul className="text-sm text-gray-600">
                  {Array.from(files).map((file, index) => (
                    <li key={index}>{file.name}</li>
                  ))}
                </ul>
              )}

              <Button 
                onClick={handleUpload} 
                className="bg-[#FDBD30] text-black hover:bg-yellow-400 flex items-center gap-2"
                disabled={uploading || !files}
              >
                {uploading ? <><Loader2 className="animate-spin h-4 w-4" /> Uploading...</> : "Upload"}
              </Button>
            </>
          )}

          {uploaded && (
            <>
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-4 h-4" /> Files uploaded successfully
              </div>
              <div className="flex gap-3">
                <Button onClick={handleReset} className="bg-blue-600 text-white hover:bg-blue-700">Add Another</Button>
                <Button className="bg-green-600 text-white hover:bg-green-700">Done</Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UploadModal;
