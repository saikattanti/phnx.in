"use client";

import { motion } from 'framer-motion';
import { Shield, Trophy, Users } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Trophy,
      title: "Legacy of Excellence",
      description: "Since its inception, Phoenix has been the cornerstone of technical innovation and creativity.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by students, for students, fostering a community of future tech leaders.",
    },
    {
      icon: Shield,
      title: "Technical Excellence",
      description: "Pushing boundaries with cutting-edge technology and innovative challenges.",
    },
  ];

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
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Welcome to the game where innovation meets survival. Phoenix 25 is not just an event; it's a test of skill, determination, and creativity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-pink-500/20 hover:border-pink-500/40 transition-colors"
              >
                <feature.icon className="h-12 w-12 text-[#FF2D55] mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-r from-pink-500/10 to-transparent p-8 rounded-2xl border border-pink-500/20"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Phoenix 25 aims to push the boundaries of technical innovation while creating an unforgettable experience for participants. We believe in fostering creativity, technical excellence, and the spirit of healthy competition.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}