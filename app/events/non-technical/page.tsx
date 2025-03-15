"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

const nonTechEvents = [
  { id: "Sherlockology", name: "Sherlockology", image: "/events/debate.jpg" },
  { id: "treasure-hunt", name: "Treasure Hunt", image: "/events/treasure-hunt.jpg" },
  { id: "The Podium", name: "The Podium", image: "/events/quiz.jpg" },
  { id: "Art-Maniac", name: "Art-Maniac", image: "/events/talent-show.jpg" },
  { id: "Penchanted", name: "Penchanted", image: "/events/poetry-slam.jpg" },
  { id: "Craftism", name: "Craftism", image: "/events/standup-comedy.jpg" },
  { id: "Quizzomaniac", name: "Quizzomaniac", image: "/events/music-battle.jpg" },
];

export default function NonTechPage() {
  return (
    <div className="min-h-screen bg-[#121212] pt-20">
      <Head>
        <title>Non-Tech Events | Phoenix '25</title>
      </Head>

      {/* Title Section */}
      <section className="relative py-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-[#FF2D55]">
              🎭 NON-TECH EVENTS 🎶
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Showcase your creativity, talent, and wit in these exciting events!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Cards Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {nonTechEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`relative rounded-lg overflow-hidden w-full max-w-sm h-72 group shadow-lg transition-all duration-300 ${
                  nonTechEvents.length % 3 === 1 && index === nonTechEvents.length - 1
                    ? "col-span-3 justify-self-center"
                    : ""
                } ${
                  nonTechEvents.length % 3 === 2 && index === nonTechEvents.length - 2
                    ? "col-span-2 justify-self-center"
                    : ""
                }`}
              >
                {/* Background Image with Hover Effect */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-70 transition-opacity duration-300"
                  style={{ backgroundImage: `url(${event.image})` }}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-6 z-10 text-center">
                  <h3 className="text-3xl font-bold text-white">{event.name}</h3>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <Link
                      href={`/events/non-tech/${event.id}`}
                      className="bg-transparent border border-pink-500 hover:bg-pink-500/20 text-white py-2 px-4 rounded-md text-sm font-medium transition-all duration-300"
                    >
                      Know More
                    </Link>
                    <Link
                      href={`/events/non-tech/${event.id}/register`}
                      className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-all duration-300"
                    >
                      Register Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
