"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code, Gamepad2, Camera, Brain, Trophy, Users, PartyPopper, Palette } from 'lucide-react';
import Head from 'next/head';

export default function Events() {
    const events = [
        {
            id: "valorant",
            title: "Valorant",
            image: "/api/placeholder/800/500" // Replace with actual image path
        },
        {
            id: "e-football",
            title: "E-Football",
            image: "/events/e-football.jpg" // Replace with actual image path
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
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-[#FF2D55]">
                            GAMING
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
                            Enter the arena. Only the strongest players survive.
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
                                    <div className="relative h-full flex flex-col justify-between p-6 z-10">
                                        <div className="text-center">
                                            <h3 className="text-3xl font-bold text-white mb-2">{event.title}</h3>
                                        </div>

                                        {/* Buttons */}
                                        <div className="flex flex-col space-y-3 mt-4 w-full">
                                            <Link href={`/events/${event.id}`} className="bg-transparent border border-pink-500 hover:bg-pink-500/20 text-white py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 w-full text-center">
                                                Know More
                                            </Link>
                                            <Link href={`/events/${event.id}/register`} className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 w-full text-center">
                                                Register Now
                                            </Link>
                                        </div>
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