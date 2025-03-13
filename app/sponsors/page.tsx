"use client";

import { motion } from 'framer-motion';
import { Trophy, Star, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Sponsors() {
  const sponsorTiers = [
    {
      id: "001",
      tier: "Diamond",
      icon: Crown,
      description: "Elite partners who make the games possible",
      benefits: [
        "Premium logo placement",
        "VIP access to all events",
        "Dedicated social media promotion",
        "Speaking opportunities",
      ],
    },
    {
      id: "067",
      tier: "Gold",
      icon: Trophy,
      description: "Major contributors to the Phoenix legacy",
      benefits: [
        "Featured logo placement",
        "Event access passes",
        "Social media mentions",
        "Booth space at venue",
      ],
    },
    {
      id: "456",
      tier: "Silver",
      icon: Star,
      description: "Valued supporters of innovation",
      benefits: [
        "Logo on website",
        "Event passes",
        "Brand visibility",
        "Networking opportunities",
      ],
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
              Our Sponsors
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Join the elite circle of partners who make Phoenix 25 possible
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsorTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <tier.icon className="h-8 w-8 text-[#FF2D55]" />
                    <span className="text-gray-400 font-mono">#{tier.id}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.tier}</h3>
                  <p className="text-gray-400 mb-6">{tier.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <span className="h-1.5 w-1.5 bg-[#FF2D55] rounded-full mr-3" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    className="w-full bg-[#FF2D55] hover:bg-[#FF2D55]/90 text-white"
                  >
                    Become a Sponsor
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-gradient-to-r from-pink-500/10 to-transparent p-8 rounded-2xl border border-pink-500/20 text-center"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Interested in Sponsoring?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Let's discuss how we can create a meaningful partnership that benefits both our organizations.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#FF2D55] hover:bg-gray-100"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}