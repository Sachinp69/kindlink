// filepath: kindlink/components/Navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // for hamburger icons
import KindLinkHeader from "./KindLinkHeader";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 border-b border-gray-500">
      {/* Logo */}
      <div className="font-bold text-2xl text-white"><KindLinkHeader/></div>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 text-white">
        <Link href="/main/home" className="hover:text-amber-600 transition">Home</Link>
        <Link href="/main/reports" className="hover:text-amber-600 transition">Report</Link>
        <Link href="/main/requests" className="hover:text-amber-600 transition">Requests</Link>
        <Link href="/main/donations" className="hover:text-amber-600 transition">Donations</Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 border-t border-gray-500 flex flex-col items-center gap-6 py-6 text-white md:hidden">
          <Link href="/" className="hover:text-amber-600 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="hover:text-amber-600 transition" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/projects" className="hover:text-amber-600 transition" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link href="/contact" className="hover:text-amber-600 transition" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
