"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Circle, Triangle, Square, Camera, Phone } from "lucide-react";

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
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

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

        {/* Right - Menu & Contact Us Button */}
        <div className="flex items-center space-x-6">
          {/* Menu Items */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.div key={item.href} whileHover={{ scale: 1.1, y: -3 }} transition={{ duration: 0.3 }}>
                <Link
                  href={item.href}
                  className="relative flex items-center text-gray-300 hover:text-[#FF2D55] transition-all duration-300 group"
                  rel="next"
                >
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#FF2D55] opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"
                  />
                  <item.icon className="h-4 w-4 mr-2 text-[#FF2D55] group-hover:animate-pulse" />
                  <span className="font-medium group-hover:text-[#FF2D55] transition-colors">
                    {item.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden absolute right-4 top-4">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-black/95"
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <motion.div key={item.href} whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Link
                href={item.href}
                className="flex items-center text-gray-300 hover:text-[#FF2D55] px-3 py-2 rounded-md text-base font-medium group"
                onClick={() => setIsOpen(false)}
              >
                <motion.div className="absolute inset-0 bg-[#FF2D55] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <item.icon className="h-4 w-4 mr-2 text-[#FF2D55] group-hover:animate-pulse" />
                <span className="font-medium">{item.label}</span>
              </Link>
            </motion.div>
          ))}

          {/* Contact Us Button in Mobile Menu */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Link
              href="/contact"
              className="block w-full text-center text-white bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
