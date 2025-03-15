"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="min-h-screen bg-[#121212] pt-20 text-white">
      {/* Page Title */}
      <section className="relative py-12 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-[#FF2D55]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h1>
      </section>

      {/* Team Members Grid */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-black/50 backdrop-blur-md rounded-lg p-6 shadow-lg border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="mx-auto rounded-full border-4 border-pink-500 shadow-md"
                />
                <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                <p className="text-pink-400">{member.designation}</p>
                <div className="mt-3 space-y-1">
                  <Link href={`tel:${member.phone.replace(/\s/g, "")}`} className="flex justify-center items-center text-gray-300 hover:text-pink-400 transition-all">
                    <Phone className="h-4 w-4 mr-2 text-pink-400" /> {member.phone}
                  </Link>
                  <Link href={`mailto:${member.email}`} className="flex justify-center items-center text-gray-300 hover:text-pink-400 transition-all break-words text-sm md:text-base">
                    <Mail className="h-4 w-4 mr-2 text-pink-400" /> {member.email}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Second Row Centered Card */}
          <div className="flex justify-center mt-8">
            <motion.div
              className="bg-black/50 backdrop-blur-md rounded-lg p-6 shadow-lg border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 text-center w-[330px]"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={teamMembers[3].image}
                alt={teamMembers[3].name}
                width={150}
                height={150}
                className="mx-auto rounded-full border-4 border-pink-500 shadow-md"
              />
              <h3 className="text-xl font-semibold mt-4">{teamMembers[3].name}</h3>
              <p className="text-pink-400">{teamMembers[3].designation}</p>
              <div className="mt-3 space-y-1">
                <Link href={`tel:${teamMembers[3].phone.replace(/\s/g, "")}`} className="flex justify-center items-center text-gray-300 hover:text-pink-400 transition-all">
                  <Phone className="h-4 w-4 mr-2 text-pink-400" /> {teamMembers[3].phone}
                </Link>
                <Link href={`mailto:${teamMembers[3].email}`} className="flex justify-center items-center text-gray-300 hover:text-pink-400 transition-all break-words text-sm md:text-base">
                  <Mail className="h-4 w-4 mr-2 text-pink-400" /> {teamMembers[3].email}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="md:col-span-3 bg-black/50 backdrop-blur-md p-6 rounded-lg border border-pink-500/20">
              <h2 className="text-2xl font-bold text-pink-500 mb-4">Get in Touch</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white" />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white" />
                <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white" />
                <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md">Send Message</button>
              </form>
            </div>

            {/* Google Map & XplOriCa Contact Details */}
            <div className="md:col-span-2 space-y-6">
              <div className="rounded-lg overflow-hidden">
                {/* <iframe title="Phoenix 25 Location" className="w-full h-64 rounded-lg" src="https://maps.app.goo.gl/YW5QA2ePH86wUhsT8" allowFullScreen></iframe> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.6191877399706!2d88.41285357506064!3d22.443354637695407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0272166e4cb263%3A0x27f12170efd9ddee!2sFuture%20Institute%20of%20Engineering%20and%20Management!5e0!3m2!1sen!2sin!4v1742068267193!5m2!1sen!2sin" width="full" height="450" className="border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="bg-black/50 p-6 rounded-lg border border-pink-500/20">
                <h3 className="text-xl font-bold text-pink-500 mb-2">XplOriCa Contact</h3>
                <p className="flex items-center text-gray-300"><MapPin className="h-5 w-5 mr-2 text-pink-400" /> Sonarpur Station Road, Kolkata-700150</p>
                <p className="flex items-center text-gray-300 mt-2"><Phone className="h-5 w-5 mr-2 text-pink-400" /> +91 98310 33357</p>
                <p className="flex items-center text-gray-300 mt-2"><Globe className="h-5 w-5 mr-2 text-pink-400" /><Link href="https://xplorica.in" className="text-pink-400 hover:underline"> xplorica.in</Link></p>
              </div>
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}
