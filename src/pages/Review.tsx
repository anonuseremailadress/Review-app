import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ChevronLeft, ChevronRight, Pin, User } from "lucide-react";

const Review = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-[#FDBD30]">
        <div className="text-xl font-bold">📄 Review powered by Orchestrate</div>
        <div className="flex items-center gap-2">
          <User className="w-5 h-5" />
          <span>Client User</span>
        </div>
      </header>

      {/* Ribbon */}
      <div className="flex justify-between items-start px-6 py-4 bg-white border-b">
        <div className="space-y-1">
          <div className="text-lg font-semibold">Document_1234.pdf</div>
          <div className="text-sm text-gray-600">
            Ref: 987654321 · Uploaded: 10 Apr 2025 · By: System Generated
          </div>
        </div>
        <div className="flex flex-col items-end gap-2 w-[205px]">
          <div className="text-sm font-medium text-gray-700">Status: Pending</div>
          <div className="flex gap-2">
            <Button className="w-[100px] bg-green-600 text-white hover:bg-green-700">Approve</Button>
            <Button className="w-[100px] bg-red-600 text-white hover:bg-red-700">Reject</Button>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="w-[100px]">&lt; Previous</Button>
            <Button variant="outline" className="w-[100px]">Next &gt;</Button>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className="flex h-[calc(100vh-160px)]">
        {/* Document Display */}
        <div className="flex-1 p-6 overflow-auto bg-white border-r">
          <div className="w-full h-full border rounded bg-gray-100 flex items-center justify-center text-gray-500">
            Document Viewer Placeholder
          </div>
        </div>

        {/* Data Column */}
        <div className="w-[400px] bg-white border-l p-4">
          <Tabs defaultValue="data" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="data">Data</TabsTrigger>
              <TabsTrigger value="comments">Comments</TabsTrigger>
            </TabsList>

            <TabsContent value="data">
              <div className="space-y-2 text-sm text-gray-700">
                <div><strong>Account Number:</strong> 987654321</div>
                <div><strong>Name:</strong> John Doe</div>
                <div><strong>Billing Period:</strong> Jan - Mar 2025</div>
                <div><strong>Amount:</strong> £245.80</div>
              </div>
            </TabsContent>

            <TabsContent value="comments">
              <div className="flex justify-between items-center mb-4">
                <Button className="bg-[#FDBD30] text-black rounded-full px-3 py-1 text-sm">Add New Comment +</Button>
              </div>
              <div className="space-y-3 text-sm">
                <div className="border p-3 rounded bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div><strong>Jane Smith</strong> · 11 Apr 2025 09:20</div>
                    <Pin className="w-4 h-4 text-gray-400 cursor-pointer hover:text-[#FDBD30]" />
                  </div>
                  <div className="mt-1">Please check the total amount.</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Review;
