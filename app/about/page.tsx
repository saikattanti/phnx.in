"use client";

import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Trophy, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#121212] pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635363638580-6c3c3d710713?q=80&w=2000')] bg-cover bg-center opacity-20"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Title with Animated Gradient */}
            <motion.h1
              className="font-custom text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-[#FF2D55]"
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            >
              ABOUT
            </motion.h1>
            
            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-semibold"
              whileHover={{ scale: 1.02 }}
            >
              Welcome to <span className="font-extrabold text-white">Phoenix 25</span>, where <span className="font-extrabold text-white">survival meets innovation!</span> 
              This year, inspired by the high-stakes world of <span className="font-extrabold text-white">Squid Game</span>, Phoenix transforms into the <span className="font-extrabold text-white">ultimate battleground</span> of intellect, skill, and strategy.
              Hosted by <span className="font-extrabold text-white">XplOriCa</span>, the official activity club of FIEM, Phoenix is the annual <span className="font-extrabold text-white">Techno-Management Fest</span>, now in its <span className="font-extrabold text-white">20th edition</span>, taking place on <span className="font-extrabold text-white">April 4th, 5th, and 6th</span>.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-[#FF2D55]">
              The Games Begin
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto font-semibold">
              In the <span className="font-extrabold text-white">Squid Game-inspired</span> <span className="font-extrabold text-white">Phoenix 25</span>, players (participants) will face <span className="font-extrabold text-white">a series of technical, management, and fun challenges</span>, testing their <span className="font-extrabold text-white">endurance and strategy</span>. 
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Tech Events */}
            <motion.div
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 4px 20px rgba(255, 45, 85, 0.5)",
                transition: { duration: 0.3 }
              }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg text-center relative overflow-hidden group"
            >
              <Shield className="text-[#FF2D55] w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-extrabold text-white">Survival of the Smartest</h3>
              <p className="text-gray-400 mt-2 font-semibold">
                Face <span className="font-extrabold text-white">coding challenges, AI battles, robotics</span> and a <span className="font-extrabold text-white">pan-India hackathon</span> to prove your skills.
              </p>

              {/* Hover Background Overlay */}
              <div className="absolute inset-0 bg-[#FF2D55] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </motion.div>

            {/* Non-Tech Events */}
            <motion.div
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 4px 20px rgba(255, 45, 85, 0.5)",
                transition: { duration: 0.3 }
              }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg text-center relative overflow-hidden group"
            >
              <Users className="text-[#FF2D55] w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-extrabold text-white">Mind Games</h3>
              <p className="text-gray-400 mt-2 font-semibold">
                Debate, quiz, writing, and craft competitions <span className="font-extrabold text-white">push players to outthink and outmaneuver their opponents</span>.
              </p>

              {/* Hover Background Overlay */}
              <div className="absolute inset-0 bg-[#FF2D55] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </motion.div>

            {/* Fun Events */}
            <motion.div
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 4px 20px rgba(255, 45, 85, 0.5)",
                transition: { duration: 0.3 }
              }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg text-center relative overflow-hidden group"
            >
              <Trophy className="text-[#FF2D55] w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-extrabold text-white">The Final Round</h3>
              <p className="text-gray-400 mt-2 font-semibold">
                Gaming, photography, and fun carnival activities like <span className="font-extrabold text-white">shooting, zorbing, and obstacle courses</span>.
              </p>

              {/* Hover Background Overlay */}
              <div className="absolute inset-0 bg-[#FF2D55] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
}
