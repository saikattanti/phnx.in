"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

const hacktonixEvents = [
  { id: "Hacktonix", name: "Hacktonix", image: "/events/hackathon.jpg" },
 /* { id: "debugging-duel", name: "Debugging Duel", image: "/events/hackathon.jpg" },
  { id: "ai-challenge", name: "AI Challenge", image: "/events/hackathon.jpg" },
  { id: "cyber-quest", name: "Cyber Quest", image: "/events/hackathon.jpg" },*/
];

export default function HacktonixPage() {
  return (
    <div className="min-h-screen bg-[#121212] pt-20">
      <Head>
        <title>Hacktonix Events | Phoenix '25</title>
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-[#00BFFF]">
              💻 HACKTONIX EVENTS 🛠️
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Push your coding skills to the limit and compete with the best minds!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Event Cards Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
            {hacktonixEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`relative rounded-lg overflow-hidden w-full max-w-sm h-72 group shadow-lg transition-all duration-300 ${
                  hacktonixEvents.length % 3 === 1 && index === hacktonixEvents.length - 1
                    ? "col-span-3 justify-self-center"
                    : ""
                } ${
                  hacktonixEvents.length % 3 === 2 && index === hacktonixEvents.length - 2
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
                      href={`/events/hacktonix/${event.id}`}
                      className="bg-transparent border border-blue-500 hover:bg-blue-500/20 text-white py-2 px-4 rounded-md text-sm font-medium transition-all duration-300"
                    >
                      Know More
                    </Link>
                    <Link
                      href={`/events/hacktonix/${event.id}/register`}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-all duration-300"
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
