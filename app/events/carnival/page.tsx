"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const carnivalEvents = [
  { id: "minutes-to-win", name: "Minutes to Win", image: "/events/e-football.jpg" },
  { id: "zorbing", name: "Zorbing", image: "/images/zorbing.jpg" },
  { id: "wordsworth", name: "Wordsworth", image: "/images/wordsworth.jpg" },
  { id: "shooting", name: "Shooting", image: "/images/shooting.jpg" },
];

export default function CarnivalPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 text-white pt-24">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-10 text-center text-gradient">
        🎡 Carnival Events 🎠
      </h1>

      {/* Event Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {carnivalEvents.map((event) => (
          <motion.div
            key={event.id}
            className="relative rounded-lg shadow-lg overflow-hidden bg-black bg-opacity-70 w-72 h-72 flex flex-col items-center justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-black/50"
              style={{ backgroundImage: `url(${event.image})` }}
            ></div>

            {/* Event Details */}
            <div className="relative z-10 p-6 text-center">
              <h2 className="text-2xl font-bold mb-4">{event.name}</h2>
              {/* Click Here Button */}
              <Link
                href={`/events/carnival/${event.id}`}
                className="px-5 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium rounded-md shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
              >
                Click Here
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
