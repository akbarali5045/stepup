"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center"
        aria-label="Open menu"
      >
        <Menu size={26} />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-80 bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-6 py-5">
          <h2 className="text-lg font-semibold">Menu</h2>

          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-6 py-4 text-sm font-medium uppercase transition-colors hover:bg-gray-100 hover:text-orange-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

      </aside>
    </>
  );
}