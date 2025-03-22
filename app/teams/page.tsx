"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Facebook, Mail, Phone, Code, Brush, Camera, Brain, Megaphone } from "lucide-react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

export default function Team() {
  const teamMembers = [
    {
      id: "001",
      name: "Alex Chen",
      role: "Technical Lead",
      position: "Facilitator",
      icon: Code,
      image: "/team/saikat-wc.jpg",
      phone: "+91 98765 43210",
      email: "alex@example.com",
      linkedin: "https://linkedin.com/in/alexchen",
      facebook: "https://facebook.com/alexchen",
    },
    {
      id: "002",
      name: "Alex Chen",
      role: "Technical Lead",
      position: "Facilitator",
      icon: Code,
      image: "/team/saikat-wc.jpg",
      phone: "+91 98765 43210",
      email: "alex@example.com",
      linkedin: "https://linkedin.com/in/alexchen",
      facebook: "https://facebook.com/alexchen",
    },
    {
      id: "003",
      name: "Alex Chen",
      role: "Technical Lead",
      position: "Facilitator",
      icon: Code,
      image: "/team/saikat-wc.jpg",
      phone: "+91 98765 43210",
      email: "alex@example.com",
      linkedin: "https://linkedin.com/in/alexchen",
      facebook: "https://facebook.com/alexchen",
    },
    {
      id: "067",
      name: "Sarah Kim",
      role: "Creative Director",
      position: "Mentors",
      icon: Brush,
      image: "/team/saptarshi-cc.jpg",
      phone: "+91 78965 43210",
      email: "sarah@example.com",
      linkedin: "https://linkedin.com/in/sarahkim",
      facebook: "https://facebook.com/sarahkim",
    },
    {
      id: "068",
      name: "Sarah Kim",
      role: "Creative Director",
      position: "Mentors",
      icon: Brush,
      image: "/team/saptarshi-cc.jpg",
      phone: "+91 78965 43210",
      email: "sarah@example.com",
      linkedin: "https://linkedin.com/in/sarahkim",
      facebook: "https://facebook.com/sarahkim",
    },
    {
      id: "069",
      name: "Sarah Kim",
      role: "Creative Director",
      position: "Mentors",
      icon: Brush,
      image: "/team/saptarshi-cc.jpg",
      phone: "+91 78965 43210",
      email: "sarah@example.com",
      linkedin: "https://linkedin.com/in/sarahkim",
      facebook: "https://facebook.com/sarahkim",
    },
    {
      id: "070",
      name: "Sarah Kim",
      role: "Creative Director",
      position: "Mentors",
      icon: Brush,
      image: "/team/saptarshi-cc.jpg",
      phone: "+91 78965 43210",
      email: "sarah@example.com",
      linkedin: "https://linkedin.com/in/sarahkim",
      facebook: "https://facebook.com/sarahkim",
    },
    {
      id: "071",
      name: "Sarah Kim",
      role: "Creative Director",
      position: "Mentors",
      icon: Brush,
      image: "/team/saptarshi-cc.jpg",
      phone: "+91 78965 43210",
      email: "sarah@example.com",
      linkedin: "https://linkedin.com/in/sarahkim",
      facebook: "https://facebook.com/sarahkim",
    },
    {
      id: "218",
      name: "Mike Zhang",
      role: "Photography Lead",
      position: "Core Committee",
      icon: Camera,
      image: "/team/saikat-wc.jpg",
      phone: "+91 87654 32109",
      email: "mike@example.com",
      linkedin: "https://linkedin.com/in/mikezhang",
      facebook: "https://facebook.com/mikezhang",
    },
    {
      id: "219",
      name: "Mike Zhang",
      role: "Photography Lead",
      position: "Core Committee",
      icon: Camera,
      image: "/team/saikat-wc.jpg",
      phone: "+91 87654 32109",
      email: "mike@example.com",
      linkedin: "https://linkedin.com/in/mikezhang",
      facebook: "https://facebook.com/mikezhang",
    },
    {
      id: "220",
      name: "Mike Zhang",
      role: "Photography Lead",
      position: "Core Committee",
      icon: Camera,
      image: "/team/saikat-wc.jpg",
      phone: "+91 87654 32109",
      email: "mike@example.com",
      linkedin: "https://linkedin.com/in/mikezhang",
      facebook: "https://facebook.com/mikezhang",
    },
    {
      id: "221",
      name: "Mike Zhang",
      role: "Photography Lead",
      position: "Core Committee",
      icon: Camera,
      image: "/team/saikat-wc.jpg",
      phone: "+91 87654 32109",
      email: "mike@example.com",
      linkedin: "https://linkedin.com/in/mikezhang",
      facebook: "https://facebook.com/mikezhang",
    },
    {
      id: "222",
      name: "Mike Zhang",
      role: "Photography Lead",
      position: "Core Committee",
      icon: Camera,
      image: "/team/saikat-wc.jpg",
      phone: "+91 87654 32109",
      email: "mike@example.com",
      linkedin: "https://linkedin.com/in/mikezhang",
      facebook: "https://facebook.com/mikezhang",
    },
    {
      id: "223",
      name: "Mike Zhang",
      role: "Photography Lead",
      position: "Core Committee",
      icon: Camera,
      image: "/team/saikat-wc.jpg",
      phone: "+91 87654 32109",
      email: "mike@example.com",
      linkedin: "https://linkedin.com/in/mikezhang",
      facebook: "https://facebook.com/mikezhang",
    },
    {
      id: "224",
      name: "Mike Zhang",
      role: "Photography Lead",
      position: "Core Committee",
      icon: Camera,
      image: "/team/saikat-wc.jpg",
      phone: "+91 87654 32109",
      email: "mike@example.com",
      linkedin: "https://linkedin.com/in/mikezhang",
      facebook: "https://facebook.com/mikezhang",
    },
    {
      id: "456",  
      name: "Emma Singh",
      role: "Event Coordinator",
      position: "Working Committee",
      icon: Brain,
      image: "/team/saptarshi-cc.jpg",
      phone: "+91 76543 21098",
      email: "emma@example.com",
      linkedin: "https://linkedin.com/in/emmasingh",
      facebook: "https://facebook.com/emmasingh",
    },
    {
      id: "455",
      name: "Emma Singh",
      role: "Event Coordinator",
      position: "Working Committee",
      icon: Brain,
      image: "/team/saptarshi-cc.jpg",
      phone: "+91 76543 21098",
      email: "emma@example.com",
      linkedin: "https://linkedin.com/in/emmasingh",
      facebook: "https://facebook.com/emmasingh",
    },
    {
      id: "454",
      name: "Emma Singh",
      role: "Event Coordinator",
      position: "Working Committee",
      icon: Brain,
      image: "/team/saptarshi-cc.jpg",
      phone: "+91 76543 21098",
      email: "emma@example.com",
      linkedin: "https://linkedin.com/in/emmasingh",
      facebook: "https://facebook.com/emmasingh",
    },
    {
      id: "453",
      name: "Emma Singh",
      role: "Event Coordinator",
      position: "Working Committee",
      icon: Brain,
      image: "/team/saptarshi-cc.jpg",
      phone: "+91 76543 21098",
      email: "emma@example.com",
      linkedin: "https://linkedin.com/in/emmasingh",
      facebook: "https://facebook.com/emmasingh",
    },
    {
      id: "452",
      name: "Emma Singh",
      role: "Event Coordinator",
      position: "Working Committee",
      icon: Brain,
      image: "/team/saptarshi-cc.jpg",
      phone: "+91 76543 21098",
      email: "emma@example.com",
      linkedin: "https://linkedin.com/in/emmasingh",
      facebook: "https://facebook.com/emmasingh",
    },
    {
      id: "451",
      name: "Emma Singh",
      role: "Event Coordinator",
      position: "Working Committee",
      icon: Brain,
      image: "/team/saptarshi-cc.jpg",
      phone: "+91 76543 21098",
      email: "emma@example.com",
      linkedin: "https://linkedin.com/in/emmasingh",
      facebook: "https://facebook.com/emmasingh",
    },
    {
      id: "199",
      name: "David Park",
      role: "Marketing Head",
      position: "Coordinators",
      icon: Megaphone,
      image: "/team/saikat-wc.jpg",
      phone: "+91 65432 10987",
      email: "david@example.com",
      linkedin: "https://linkedin.com/in/davidpark",
      facebook: "https://facebook.com/davidpark",
    },
  ];

  // State for Filtering
  const [selectedPosition, setSelectedPosition] = useState("All");

  // Filtered Team Members
  const filteredMembers =
    selectedPosition === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.position === selectedPosition);

   // Function to handle email click
  const handleEmailClick = (email: string) => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const mailtoLink = isMobile
      ? `mailto:${email}`
      : `https://mail.google.com/mail/?view=cm&to=${email}`;

    window.open(mailtoLink, "_blank");
  };

  // Function to handle phone click
  const handlePhoneClick = (phone: string) => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `tel:${phone}`;
    } else {
      alert(`Call ${phone} from your phone.`);
    }
  };

  
  return (
    <div className="min-h-screen bg-[#121212] pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?q=80&w=2000')] bg-cover bg-center opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-[#FF2D55]">
              Meet The Team
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              The masterminds behind Phoenix 25
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {["All", "Facilitator", "Mentors", "Core Committee", "Working Committee", "Coordinators"].map(
          (position) => (
            <button
              key={position}
              className={`px-4 py-2 rounded-full text-white border ${
                selectedPosition === position ? "bg-[#FF2D55]" : "bg-gray-800"
              }`}
              onClick={() => setSelectedPosition(position)}
            >
              {position}
            </button>
          )
        )}
      </div>

      {/* Team Grid */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <BackgroundGradient className="rounded-[22px] p-4 bg-black border border-[#FF2D55]/30 hover:border-[#FF2D55] transition-all duration-300 w-full aspect-[3/4] flex flex-col">
                  
                  {/* Image Section */}
                  <div className="relative w-full h-[55%] overflow-hidden rounded-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>

                  {/* Info Section */}
                  <div className="p-4 h-[45%] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <member.icon className="h-6 w-6 text-[#FF2D55]" />
                        <span className="text-gray-400 font-mono text-sm">#{member.id}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white">{member.name}</h3>
                      <p className="text-[#FF2D55] font-medium text-sm">{member.role}</p>
                      <p className="text-gray-300 text-sm">{member.position}</p>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-4">
                      <button
                        onClick={() => handlePhoneClick(member.phone)}
                        className="text-gray-400 text-sm flex items-center gap-2 hover:text-[#FF2D55] transition-all"
                      >
                        <Phone className="w-4 h-4" /> {member.phone}
                      </button>
                      <button
                        onClick={() => handleEmailClick(member.email)}
                        className="text-gray-400 text-sm flex items-center gap-2 hover:text-[#FF2D55] transition-all"
                      >
                        <Mail className="w-4 h-4" /> {member.email}
                      </button>
                    </div>

                    {/* Social Icons */}
                    <div className="absolute bottom-10 right-4 flex gap-3">
                      <a href={member.linkedin} target="_blank" className="hover:text-[#FF2D55]">
                        <Linkedin className="h-5 w-5 text-gray-400 hover:text-[#FF2D55]" />
                      </a>
                      <a href={member.facebook} target="_blank" className="hover:text-[#FF2D55]">
                        <Facebook className="h-5 w-5 text-gray-400 hover:text-[#FF2D55]" />
                      </a>
                    </div>
                  </div>
                </BackgroundGradient>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
