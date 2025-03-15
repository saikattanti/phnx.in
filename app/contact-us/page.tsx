"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Saptarshi Chakraborty",
    designation: "Core Committee Member",
    phone: "+91 73187 02779",
    email: "saptarshi.chakraborty.fiem.cse22@teamfuture.in",
    image: "/team/saptarshi-cc.jpg",
  },
  {
    name: "Saikat Tanti",
    designation: "Working Committee Member",
    phone: "+91 98835 84060",
    email: "saikat.tanti.fiem.cse23@teamfuture.in",
    image: "/team/saikat-wc.jpg",
  },
  {
    name: "Saptarshi Chakraborty",
    designation: "Core Committee Member",
    phone: "+91 73187 02779",
    email: "saptarshi.chakraborty.fiem.cse22@teamfuture.in",
    image: "/team/saptarshi-cc.jpg",
  },
  {
    name: "Saikat Tanti",
    designation: "Working Committee Member",
    phone: "+91 98835 84060",
    email: "saikat.tanti.fiem.cse23@teamfuture.in",
    image: "/team/saikat-wc.jpg",
  },
];

export default function Contact() {
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
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
              Need help? Get in touch with our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members - 4 Cards (3 in 1st row, 1 centered in 2nd row) */}
      <section className="py-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {teamMembers.slice(0, 3).map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 p-4 w-[250px] aspect-square flex flex-col items-center justify-center mx-auto"
              >
                <div className="relative w-24 h-24 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mt-3">{member.name}</h3>
                <p className="text-pink-500 text-sm">{member.designation}</p>
                <p className="text-gray-400 mt-1 flex items-center justify-center gap-2 text-sm">
                  <Phone className="w-4 h-4" />
                  {member.phone}
                </p>
                <p className="text-gray-400 flex items-center justify-center gap-2 text-sm">
                  <Mail className="w-4 h-4" />
                  {member.email}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Centered Last Member in 2nd Row */}
          <div className="grid grid-cols-1 place-items-center mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group relative bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 p-4 w-[250px] aspect-square flex flex-col items-center justify-center mx-auto"
            >
              <div className="relative w-24 h-24 overflow-hidden rounded-full">
                <Image
                  src={teamMembers[3].image}
                  alt={teamMembers[3].name}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mt-3">{teamMembers[3].name}</h3>
              <p className="text-pink-500 text-sm">{teamMembers[3].designation}</p>
              <p className="text-gray-400 mt-1 flex items-center justify-center gap-2 text-sm">
                <Phone className="w-4 h-4" />
                {teamMembers[3].phone}
              </p>
              <p className="text-gray-400 flex items-center justify-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                {teamMembers[3].email}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-black/50 backdrop-blur-sm rounded-lg border border-pink-500/20 p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-3">Send us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full rounded-md bg-gray-800 border border-gray-600 text-white p-2 focus:outline-none focus:border-pink-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-md bg-gray-800 border border-gray-600 text-white p-2 focus:outline-none focus:border-pink-500"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-md bg-gray-800 border border-gray-600 text-white p-2 focus:outline-none focus:border-pink-500"
                    placeholder="Your Message"
                  />
                </div>
                <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition">
                  Send <Send className="ml-2 inline-block w-4 h-4" />
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <iframe
              src="https://maps.app.goo.gl/YW5QA2ePH86wUhsT8"
              className="w-full h-[300px] rounded-lg"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
