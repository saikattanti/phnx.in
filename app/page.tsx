"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import CountdownTimer from '@/components/countdown-timer';
import { ChevronRight, PlayCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635126400317-44e7645e6458?q=80&w=2000')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-[#FF2D55]">
              Let the Game Begin
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Welcome to Phoenix 25 - Where survival meets innovation
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-[#FF2D55] hover:bg-[#FF2D55]/90 text-white"
              >
                Register Now <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-pink-500 text-pink-500 hover:bg-pink-500/10"
              >
                Watch Trailer <PlayCircle className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          {/* Countdown Timer */}
          <div className="mt-16">
            <CountdownTimer targetDate="2024-04-01" />
          </div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}