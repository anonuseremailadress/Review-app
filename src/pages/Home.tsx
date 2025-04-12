import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Search, Upload, Filter, LogOut, User, ChevronDown } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { format } from "date-fns";

const Home = () => {
  const [dateRange, setDateRange] = React.useState({ from: undefined, to: undefined });
  const [showCalendar, setShowCalendar] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-[#FDBD30]">
        <div className="text-xl font-bold">📄 Review powered by Orchestrate</div>
        <div className="flex items-center gap-2">
          <User className="w-5 h-5" />
          <span>Client User</span>
          <LogOut className="w-5 h-5 cursor-pointer" />
        </div>
      </header>

      {/* Ribbon */}
      <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b bg-white">
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-green-600 text-white hover:bg-green-700 rounded-full px-4">Approve <ChevronDown className="ml-2 h-4 w-4" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Approve</DropdownMenuItem>
              <DropdownMenuItem className="text-green-600">Send for Approval</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="bg-red-600 text-white hover:bg-red-700 rounded-full px-4">Reject</Button>

          <Button className="bg-[#FDBD30] text-black rounded-full px-4 flex items-center gap-1">
            <Upload className="w-4 h-4" /> Upload Documents +
          </Button>
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
            </DropdownMenuContent>
          </DropdownMenu>

          <Popover open={showCalendar} onOpenChange={setShowCalendar}>
            <PopoverTrigger asChild>
              <Button variant="outline" onClick={() => setShowCalendar(!showCalendar)}>
                {dateRange.from && dateRange.to
                  ? `${format(dateRange.from, "dd MMM yyyy")} - ${format(dateRange.to, "dd MMM yyyy")}`
                  : "Select Date Range"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-2 bg-white">
              <Calendar
                mode="range"
                selected={dateRange}
                onSelect={(range) => setDateRange(range)}
              />
            </PopoverContent>
          </Popover>

          <Input placeholder="Search by name, uploader, or reference..." className="w-72" />
        </div>
      </div>

      {/* Document List */}
      <div className="px-6 py-4 space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center justify-between bg-white shadow-sm border rounded-lg px-4 py-3">
            <div className="flex items-center gap-4">
              <Checkbox />
              <div>
                <div className="font-semibold">Document_{i + 1}.pdf</div>
                <div className="text-sm text-gray-500">
                  Ref: 123456789 · Uploaded: 10 Apr 2025 · By: System Generated
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Pending</span>
              <Button variant="outline" className="bg-black text-white hover:bg-gray-800">Review</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
