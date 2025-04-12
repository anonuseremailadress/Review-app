import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Filter } from "lucide-react";

const FilterControls = () => {
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [dateRange, setDateRange] = useState<{ from?: Date; to?: Date }>({});
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex items-center gap-3">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            {selectedStatus ? selectedStatus : "Filter Status"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
          {["Pending", "Sent for Approval", "Approved", "Rejected"].map((status) => (
            <DropdownMenuItem key={status} onSelect={() => setSelectedStatus(status)}>
              {status}
            </DropdownMenuItem>
          ))}
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
            onSelect={(range) => setDateRange(range || {})}
          />
        </PopoverContent>
      </Popover>

      <Input
        placeholder="Search by name, uploader, or reference..."
        className="w-72"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default FilterControls;