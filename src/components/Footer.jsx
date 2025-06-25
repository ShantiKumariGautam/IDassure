import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6 text-sm text-center space-y-6">
      <div className="flex flex-wrap justify-center gap-8 text-white font-medium">
        <a href="#">About</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>

      <div className="flex justify-center gap-4 text-white">
        <a href="#"><Twitter size={20} className="hover:text-blue-400" /></a>
        <a href="#"><Facebook size={20} className="hover:text-blue-400" /></a>
        <a href="#"><Instagram size={20} className="hover:text-pink-400" /></a>
      </div>

      <p className="text-xs text-gray-500">&copy; 2023 VerifyMe. All rights reserved.</p>
    </footer>
  );
}
