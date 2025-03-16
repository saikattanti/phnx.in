"use client";

import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

export default function GamingEvents() {
    const events = [
        {
            id: "valorant",
            title: "Valorant",
            image: "/events/valorant.webp"
        },
        {
            id: "e-football",
            title: "E-Football",
            image: "/events/e-football.jpg"
        },
        {
            id: "free-fire-max",
            title: "Free-Fire Max",
            image: "/events/free-fire.jpg"
        },
        {
            id: "bgmi",
            title: "BGMI",
            image: "/events/bgmi.jpeg"
        }
    ];

    return (
        <div className="min-h-screen bg-[#121212] pt-20">
            <Head>
                <title>Gaming Events | Phoenix '25</title>
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
                        <h1 className="font-custom text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-[#FF2D55]">
                            GAMING
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                            Enter the arena. Only the strongest players survive.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Events Grid - Modified to center last row */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center">
                        {events.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
                            >
                                <div className="group relative h-64 rounded-lg overflow-hidden">
                                    {/* Event Image Background */}
                                    <div className="absolute inset-0">
                                        <img
                                            src={event.image}
                                            alt={event.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                                    </div>

                                    {/* Content */}
                                    <div className="relative h-full flex flex-col justify-end p-6 z-10">
                                        <div className="text-center mb-4">
                                            <h3 className="text-3xl font-bold text-white">{event.title}</h3>
                                        </div>

                                        {/* Buttons */}
                                        {/* <div className="grid grid-cols-2 gap-3 w-full">
                                            <Link href={`/events/${event.id}`} className="bg-transparent border border-pink-500 hover:bg-pink-500/20 text-white py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 text-center">
                                                Know More
                                            </Link>
                                            <Link href={`/events/${event.id}/register`} className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 text-center">
                                                Register Now
                                            </Link>
                                        </div> */}

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