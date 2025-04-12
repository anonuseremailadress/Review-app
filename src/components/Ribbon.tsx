import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Filter, Upload, ChevronDown } from "lucide-react";

const Ribbon = () => {
  return (
    <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b bg-white">
      <div className="flex items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-green-600 text-white hover:bg-green-700 rounded-full px-4">
              Approve <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Approve</DropdownMenuItem>
            <DropdownMenuItem className="text-green-600">Send for Approval</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button className="bg-red-600 text-white hover:bg-red-700 rounded-full px-4">Reject</Button>

        {/* Placeholder for UploadModal */}
        <div>{/* <UploadModal /> */}</div>
      </div>

      <div className="flex items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" /> Filter
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
            <DropdownMenuItem>Pending</DropdownMenuItem>
            <DropdownMenuItem>Sent for Approval</DropdownMenuItem>
            <DropdownMenuItem>Approved</DropdownMenuItem>
            <DropdownMenuItem>Rejected</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Date Range...</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Input placeholder="Search by name, uploader, or reference..." className="w-72" />
      </div>
    </div>
  );
};

export default Ribbon;
