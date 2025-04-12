import React from "react";
import { LogOut, User } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-[#FDBD30]">
      <div className="flex items-center gap-3 text-xl font-bold">
        <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
        Review powered by Orchestrate
      </div>
      <div className="flex items-center gap-2">
        <User className="w-5 h-5" />
        <span>Client User</span>
        <LogOut className="w-5 h-5 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;