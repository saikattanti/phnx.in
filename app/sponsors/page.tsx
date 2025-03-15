"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

type Sponsor = {
  name: string;
  logo: string;
  website: string;
};

const lastYearSponsors: Sponsor[] = [
  { name: "Unstop", logo: "/sponsors/unstop.jpg", website: "https://unstop.com/" },
  { name: "Apptech", logo: "/sponsors/apptech.png", website: "https://www.adidas.com" },
  { name: "Edugraph", logo: "/sponsors/edugraph.jpg", website: "https://www.telegraphindia.com/edugraph" },
  { name: "Finlatics", logo: "/sponsors/finlatics.png", website: "https://www.finlatics.com/" },
  { name: "Globsyn", logo: "/sponsors/globsyn.jpeg", website: "https://www.google.com" },
  { name: "Kebab Stop", logo: "/sponsors/kebab_stop.jpeg", website: "https://www.facebook.com/kebabbstop" },
  { name: "pizzahut", logo: "/sponsors/pizzahut.jpeg", website: "https://www.pizzahut.co.in/" },
  { name: "Reel 2 Real", logo: "/sponsors/reel2real.png", website: "https://www.facebook.com/reel2real.ronit" },
  { name: "Tea", logo: "/sponsors/Tea.jpeg", website: "https://www.pepsi.com" },
  { name: "Time", logo: "/sponsors/Time.jpeg", website: "https://www.coca-cola.com" },
];

export default function SponsorshipPage() {
  return (
    <div className="min-h-screen bg-[#121212] pt-20">
      <Head>
        <title>Sponsorship | Phoenix '25</title>
      </Head>

      {/* Title Section */}
      <section className="relative py-20 text-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-[#FF2D55]">
              LAST YEAR SPONSORS 
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              We are grateful to our past sponsors for their invaluable support!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Last Year Sponsors */}
      <section className="py-20 text-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {lastYearSponsors.map((sponsor) => (
            <motion.a
              key={sponsor.name}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="relative w-40 h-40 bg-white rounded-lg flex justify-center items-center overflow-hidden shadow-lg transition-all duration-300"
            >
              <img src={sponsor.logo} alt={sponsor.name} className="w-full h-full object-contain" />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/70 flex justify-center items-center text-white text-lg font-bold transition-opacity duration-300"
              >
                {sponsor.name}
              </motion.div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}
