"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Triangle, Square, Camera, Circle, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "/events", label: "Events", icon: Triangle },
    { href: "/sponsors", label: "Sponsors", icon: Square },
    { href: "/gallery", label: "Gallery", icon: Camera },
    { href: "/about", label: "About Us", icon: Circle },
    { href: "/contact", label: "Contact Us", icon: Phone },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-pink-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Left - Phoenix Logo & Name */}
        <div className="flex items-center space-x-2">
          <Link href="https://futureeducation.in/fiem/" target="_blank">
            <img src="/logo/future-blue.png" alt="FIEM Logo" className="h-8 w-auto" />
          </Link>
          <Link href="https://xplorica.in" target="_blank">
            <img src="/logo/xplorica-small.png" alt="Xplorica Logo" className="h-10 w-auto ml-1" />
          </Link>
          <Link href="/">
            <img src="/logo/phoenix-small.png" alt="Phoenix 25 Logo" className="h-10 w-auto ml-1" />
          </Link>
          <Link href="/">
            <span className="text-xl font-bold text-white">Phoenix '25</span>
          </Link>
        </div>

        {/* Right - Menu Items (Desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <motion.div key={item.href} whileHover={{ scale: 1.1, y: -3 }} transition={{ duration: 0.3 }}>
              <Link
                href={item.href}
                className="relative flex items-center text-gray-300 hover:text-[#FF2D55] transition-all duration-300 group"
                rel="next"
              >
                <motion.div className="absolute inset-0 rounded-full bg-[#FF2D55] opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg" />
                <item.icon className="h-4 w-4 mr-2 text-[#FF2D55] group-hover:animate-pulse" />
                <span className="font-medium group-hover:text-[#FF2D55] transition-colors">{item.label}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* New Fullscreen Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black z-[999] flex flex-col flex-grow backdrop:black" 
        >
          {/* Mobile Header with Close Button */}
          <div className="flex justify-between items-center p-4 border-b border-pink-500/20">
            <div className="flex items-center space-x-2">
              <Link href="/" onClick={() => setIsOpen(false)}>
                <img src="/logo/phoenix-small.png" alt="Phoenix 25 Logo" className="h-10 w-auto" />
              </Link>
              <span className="text-xl font-bold text-white">Phoenix '25</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[#FF2D55] transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
          </div>

          {/* Menu Items - Centered */}
          <div className="flex flex-col items-center justify-center flex-grow bg-black">
            <div className="w-full max-w-md space-y-6 px-4">
              {menuItems.map((item) => (
                <motion.div
                  key={item.href}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <Link
                    href={item.href}
                    className="flex flex-col items-center text-center py-4 text-gray-300 hover:text-[#FF2D55] transition-colors group"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="h-8 w-8 mb-2 text-[#FF2D55] group-hover:animate-pulse" />
                    <span className="text-2xl font-medium">{item.label}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 text-center text-gray-500 text-sm border-t border-pink-500/20">
            <p>© 2025 Phoenix</p>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
