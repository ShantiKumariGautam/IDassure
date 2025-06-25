import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-700">
      <div className="text-2xl font-bold">IDAssure</div>
      <div className="space-x-6 text-sm">
        <a href="#features" className="hover:text-blue-400">Features</a>
        <a href="#how-it-works" className="hover:text-blue-400">How It Works</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </div>
    </nav>
  );
}
