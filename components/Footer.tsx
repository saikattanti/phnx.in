import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconMapPin,
  IconHome,
} from "@tabler/icons-react";

export default function Footer() {
  const links = [
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-5 w-6 text-pink-500" />,
      href: "https://instagram.com/phnx.fiem",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-6 w-6 text-blue-500" />,
      href: "https://in.linkedin.com/company/xplorica",
    },
    {
      title: "Facebook",
      icon: <IconBrandFacebook className="h-6 w-6 text-blue-500" />,
      href: "https://facebook.com/phnx.fiem",
    },
    {
      title: "Home",
      icon: <IconHome className="h-6 w-6 text-white" />,
      href: "/",
    },
    {
      title: "Contact",
      icon: <IconMapPin className="h-6 w-6 text-green-500" />,
      href: "/contact",
    },
    {
      title: "YouTube",
      icon: <IconBrandYoutube className="h-6 w-6 text-red-500" />,
      href: "https://www.youtube.com/@Phoenix-xo9ul",
    },
  ];

  return (
    <footer className=" bottom-0 w-full bg-[#121212] text-black">
      <div className="flex flex-col items-center justify-center py-4">
        {/* Keep second image style for mobile */}
        <div className="hidden md:flex">
          <FloatingDock items={links} />
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex space-x-4 bg-transparent px-6 py-3 rounded-full">
          {links.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          ))}
        </div>

        <div className="text-xs md:text-sm text-gray-500 mt-3">
          &copy; 2025 Phoenix'25. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
