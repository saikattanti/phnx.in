"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

type SponsorshipEvent = {
  id: string;
  name: string;
  image: string;
  description: string;
};

type Sponsor = {
  name: string;
  logo: string;
  website: string;
};

const sponsorshipEvents: SponsorshipEvent[] = [
  {
    id: "gold-sponsor",
    name: "Gold Sponsorship",
    image: "/sponsors/gold.jpg",
    description: "Become a premium Gold Sponsor and gain exclusive benefits.",
  },
  {
    id: "silver-sponsor",
    name: "Silver Sponsorship",
    image: "/sponsors/silver.jpg",
    description: "Join as a Silver Sponsor and enjoy great visibility.",
  },
  {
    id: "bronze-sponsor",
    name: "Bronze Sponsorship",
    image: "/sponsors/bronze.jpg",
    description: "Support us as a Bronze Sponsor and connect with a wider audience.",
  },
];

const lastYearSponsors: Sponsor[] = [
  { name: "Company 1", logo: "/sponsors/company1.png", website: "https://company1.com" },
  { name: "Company 2", logo: "/sponsors/company2.png", website: "https://company2.com" },
  { name: "Company 3", logo: "/sponsors/company3.png", website: "https://company3.com" },
  { name: "Company 4", logo: "/sponsors/company4.png", website: "https://company4.com" },
  { name: "Company 5", logo: "/sponsors/company5.png", website: "https://company5.com" },
  { name: "Company 6", logo: "/sponsors/company6.png", website: "https://company6.com" },
  { name: "Company 7", logo: "/sponsors/company7.png", website: "https://company7.com" },
  { name: "Company 8", logo: "/sponsors/company8.png", website: "https://company8.com" },
  { name: "Company 9", logo: "/sponsors/company9.png", website: "https://company9.com" },
  { name: "Company 10", logo: "/sponsors/company10.png", website: "https://company10.com" },
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
              💼 SPONSORSHIP OPPORTUNITIES 🤝
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Partner with us and be a part of Phoenix '25 to expand your reach and impact!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sponsorship Cards Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {sponsorshipEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-lg overflow-hidden w-full max-w-sm h-80 group shadow-lg transition-all duration-300"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${event.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-6 z-10 text-center">
                  <h3 className="text-3xl font-bold text-white">{event.name}</h3>
                  <p className="text-sm text-gray-300 mt-2">{event.description}</p>
                  <div className="mt-4">
                    <Link href={`/sponsorship/${event.id}`} className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-all duration-300">
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Last Year Sponsors */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Last Year Sponsors</h2>
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {lastYearSponsors.map((sponsor) => (
            <motion.a
              key={sponsor.name}
              href={sponsor.website}
              target="10"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-32 h-32 bg-white rounded-lg flex justify-center items-center overflow-hidden shadow-lg transition-all duration-300"
            >
              <img src={sponsor.logo} alt={sponsor.name} className="w-full h-full object-contain" />
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}
