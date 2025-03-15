import React from "react";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import NavLink from "@/components/common/NavLink";

const Header = () => {
  const isLoggedIn = false;

  return (
    <nav className="container flex items-center justify-between py-4 px-2 mx-auto lg:px-8">
      <div className="flex lg:flex-1">
        <NavLink href="/" className="flex items-center gap-1 shrink-0">
          <FileText
            className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform
        transition duration-200 ease-in-out"
          />
          <span className="lg:text-xl font-extrabold text-gray-900">
            SummarAize
          </span>
        </NavLink>
      </div>

      <div className="flex gap-4 lg:justify-center lg:items-center lg:gap-12">
        <NavLink href="/#pricing">Pricing</NavLink>
        {isLoggedIn && <NavLink href="/dashboard">Your Summaries</NavLink>}
      </div>

      <div className="flex lg:justify-end flex-1">
        {isLoggedIn ? (
          <div className="flex gap-2 items-center">
            <NavLink href="/upload">Upload PDF</NavLink>
            <div>Pro</div>
            <Button>Sign Out</Button>
          </div>
        ) : (
          <div>
            <NavLink href="/sign-in">Sign In</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
