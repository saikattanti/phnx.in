"use client";

import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Trophy, Users } from "lucide-react";
import { LinkPreview } from "@/components/ui/link-preview";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import ColourfulText from "@/components/ui/colourful-text";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function About() {
  return (
    <div className="min-h-screen bg-[#121212] pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-[#121212]">
        {/* Background Effect */}
        <BackgroundBeamsWithCollision className="absolute inset-0 opacity-50 mix-blend-overlay" children={undefined} />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-20"
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
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-semibold"
            whileHover={{ scale: 1.02 }}
          >
            Welcome to <LinkPreview url="https://phnx-in.vercel.app/" className="font-extrabold text-white"><ColourfulText text="Phoenix '25" /></LinkPreview>, where <span className="font-extrabold text-white">survival meets innovation!</span>
            This year, inspired by the high-stakes world of <span className="font-extrabold text-white">Squid Game</span>, Phoenix transforms into the <span className="font-extrabold text-white">ultimate battleground</span> of intellect, skill, and strategy.
            Hosted by <LinkPreview url="https://xplorica.in/" className="font-extrabold text-white"><ColourfulText text="XplOriCa" /></LinkPreview>, the official activity club of <LinkPreview url="https://futureeducation.in/fiem/" className="font-extrabold text-white"><ColourfulText text="FIEM" /></LinkPreview>, Phoenix is the annual <span className="font-extrabold text-white">Techno-Management Fest</span>, now in its <span className="font-extrabold text-white">20th edition</span>, taking place on <span className="font-extrabold text-white">April 4th, 5th, and 6th</span>.
          </motion.p>
        </motion.div>
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
            <div className="max-w-5xl mx-auto px-8">
              <HoverEffect
                items={[
                  {
                    title: "Technical Challenges",
                    description: "Compete in AI battles, robotics, and coding challenges to prove your skills.",
                    link: "#",
                  },
                  {
                    title: "Management Events",
                    description: "Showcase your leadership and problem-solving skills through strategic tasks.",
                    link: "#",
                  },
                  {
                    title: "Fun Activities",
                    description: "Engage in thrilling carnival games, quizzes, and mind games to test your wits.",
                    link: "#",
                  },
                ]}
              />
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}