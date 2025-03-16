"use client";

import { motion } from 'framer-motion';
import { Brain, Camera, Code, Gamepad2, Palette, PartyPopper, Trophy, Users } from 'lucide-react';
import Link from 'next/link';
import Head from 'next/head';
import Footer from '@/components/Footer';


export default function Events() {
  const events = [
    {
      id: "hackathon",
      title: "Hackathon",
      description: "Code or be eliminated! 24 hours of intense coding challenges.",
      icon: Code,
      color: "from-red-500 to-pink-500",
    },
    {
      id: "technical",
      title: "Technical",
      description: "Crack the challenge or face elimination. Test your technical prowess.",
      icon: Brain,
      color: "from-blue-500 to-purple-500",
    },
    {
      id: "non-technical",
      title: "Non Technical",
      description: "Participate in fun events and games. Only the best will survive.",
      icon: Palette,
      color: "from-white-500 to-emerald-500",
    },
    {
      id: "gaming",
      title: "Gaming",
      description: "Enter the arena. Only the strongest players survive.",
      icon: Gamepad2,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "photography",
      title: "Photography",
      description: "Capture the perfect moment or be eliminated from the game.",
      icon: Camera,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: "management",
      title: "Management",
      description: "Plan like the Front Man, execute like a winner.",
      icon: Users,
      color: "from-purple-500 to-indigo-500",
    },
    {
      id: "carnival",
      title: "Carnival",
      description: "Experience the thrill of the Squid Game playground.",
      icon: PartyPopper,
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#121212] pt-20">
      <Head>
        <title>Events | Phoenix '25</title>
      </Head>
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
              Choose Your Game
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Each event is a new challenge. Will you survive and claim victory?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/events/${event.id}`} rel="next">
                  <div className="group relative bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 p-6">
                    <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

                    <div className="relative z-10">
                      <event.icon className="h-12 w-12 text-[#FF2D55] mb-4" />
                      <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
                      <p className="text-gray-400">{event.description}</p>

                      <div className="mt-4 flex items-center text-pink-500">
                        <span className="text-sm font-medium">Learn more</span>
                        <Trophy className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}