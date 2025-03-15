"use client";

import { motion } from 'framer-motion';
import { Shield, Trophy, Users } from 'lucide-react';

export default function About() {
 

  return (
    <div className="min-h-screen bg-[#121212] pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635363638580-6c3c3d710713?q=80&w=2000')] bg-cover bg-center opacity-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-[#FF2D55]">
              About Phoenix 25
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">Phoenix is the annual Techno-Management fest of Future Institute of Engineering and Management, organized by XplOriCa , the official activity club of the college. This year, with the 20th edition of Phoenix scheduled on 4th, 5th, and 6th of April, the fire bird is ready to reach new heights of success. Phoenix has given exponentially since its nascent years and witnes Welcome to the game where innovation meets survival. Phoenix 25 is not just an event; it's a test of skill, determination, and creativity.
            </p>
          </motion.div>
        </div>
      </section>


      
    </div>
  );
}