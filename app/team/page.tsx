"use client";

import { motion } from 'framer-motion';
import { Code, Brush, Camera, Brain, Megaphone, Users } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      id: "001",
      name: "Alex Chen",
      role: "Technical Lead",
      icon: Code,
      description: "Leading the technical challenges and hackathon events",
    },
    {
      id: "067",
      name: "Sarah Kim",
      role: "Creative Director",
      icon: Brush,
      description: "Bringing the Squid Game aesthetic to life",
    },
    {
      id: "218",
      name: "Mike Zhang",
      role: "Photography Lead",
      icon: Camera,
      description: "Capturing the intensity of every moment",
    },
    {
      id: "456",
      name: "Emma Singh",
      role: "Event Coordinator",
      icon: Brain,
      description: "Orchestrating the perfect game experience",
    },
    {
      id: "199",
      name: "David Park",
      role: "Marketing Head",
      icon: Megaphone,
      description: "Spreading the word about Phoenix 25",
    },
    {
      id: "101",
      name: "Lisa Wang",
      role: "Community Manager",
      icon: Users,
      description: "Building and nurturing our player community",
    },
  ];

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

      {/* Team Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <member.icon className="h-8 w-8 text-[#FF2D55]" />
                      <span className="text-gray-400 font-mono">#{member.id}</span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">{member.name}</h3>
                      <p className="text-[#FF2D55] font-medium">{member.role}</p>
                      <p className="text-gray-400">{member.description}</p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-pink-500/10">
                      <div className="flex items-center space-x-4">
                        <div className="h-2 w-2 bg-[#FF2D55] rounded-full animate-pulse" />
                        <span className="text-gray-300 text-sm">Active Game Master</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-r from-pink-500/10 to-transparent p-8 rounded-2xl border border-pink-500/20 text-center"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Join Our Team</h2>
            <p className="text-gray-300 text-lg mb-4">
              Think you have what it takes to be a Game Master?
            </p>
            <p className="text-[#FF2D55]">Applications opening soon</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}