// filepath: kindlink/components/Navbar.tsx
"use client";
import { signOut } from "next-auth/react";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // for hamburger icons
import KindLinkHeader from "./KindLinkHeader";
import LoginPage from "@/app/login/page";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 border-b border-gray-500">
        {/* Logo */}
        <div className="font-bold text-2xl text-white">
          <KindLinkHeader />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 text-white items-center">
          <Link href="/main/home" className="hover:text-amber-600 transition">
            Home
          </Link>
          <Link href="/main/reports" className="hover:text-amber-600 transition">
            Report
          </Link>
          <Link href="/main/donations" className="hover:text-amber-600 transition">
            Donations
          </Link>
          <Link href="/main/profile" className="hover:text-amber-600 transition">
            Profile
          </Link>
          <button
            onClick={() => setShowPopup(true)}
            className="px-3 py-1 rounded bg-red-600 hover:bg-red-700 hover:cursor-pointer transition"
          >
            Logout
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 border-t 
        border-gray-500 flex flex-col items-center gap-6 py-6 text-white md:hidden z-50">

          <Link href="/main/home" className="hover:text-amber-600 transition"
            onClick={() => setIsOpen(false)}
          >Home</Link>

          <Link href="/main/reports" className="hover:text-amber-600 transition"
            onClick={() => setIsOpen(false)}
          >Report</Link>

          <Link href="/main/donations" className="hover:text-amber-600 transition"
            onClick={() => setIsOpen(false)}
          >Donations</Link>

          <button
            onClick={() => {
              setIsOpen(false);
              setShowPopup(true);
            }}
            className="px-3 py-1 rounded bg-red-600 hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      )}

      {/* Logout Confirmation Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-80 text-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Are you sure you want to log out?
            </h2>
            <div className="flex justify-around">
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 rounded bg-slate-600 hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowPopup(false);
                  signOut();
                }}
                className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
