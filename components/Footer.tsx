"use client";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Home, MapPin, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#121212] text-gray-300 py-10">
      <div className="container mx-auto flex flex-col items-center">
        {/* Social Media Icons */}
        <div className="flex space-x-8 mb-6">
          <Link href="https://instagram.com/phnx.fiem" target="_blank">
            <Instagram className="w-8 h-8 hover:text-pink-500 transition-all duration-300" />
          </Link>

          <Link href="https://in.linkedin.com/company/xplorica" target="_blank">
            <Linkedin className="w-8 h-8 hover:text-blue-500 transition-all duration-300" />
          </Link>

          <Link href="https://facebook.com/phnx.fiem" target="_blank">
            <Facebook className="w-8 h-8 hover:text-blue-500 transition-all duration-300" />
          </Link>
          <Link href="/" target="_blank">
            <Home className="w-8 h-8 hover:text-white transition-all duration-300" />
          </Link>
          <Link href="/contact" target="_blank">
            <MapPin className="w-8 h-8 hover:text-green-500 transition-all duration-300" />
          </Link>
          <Link href="https://www.youtube.com/@Phoenix-xo9ul" target="_blank">
            <Youtube className="w-8 h-8 hover:text-red-500 transition-all duration-300" />
          </Link>
        </div>

        {/* Links */}
        <div className="text-sm text-gray-500">
          <p>&copy; 2025 Phoenix'25. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
