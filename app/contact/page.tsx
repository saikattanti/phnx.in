"use client";

import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Shamba Saha",
    designation: "Core Committee Member",
    phone: "+91 9748102685",
    email: "shamba.saha.fiem.cse22@teamfuture.in",
    image: "/team/cc/shamba.jpg",
  },
  {
    name: "Ujjwal Sau",
    designation: "Core Committee Member",
    phone: "+91 8918500355",
    email: "ujjwal.sau.fiem.it22@teamfuture.in",
    image: "/team/cc/ujjwal.jpg",
  },
  {
    name: "Preyoshi Mondal",
    designation: "Core Committee Member",
    phone: "+91 9007014436",
    email: "preyoshi.mondal.fiem.cse22@teamfuture.in",
    image: "/team/cc/preyoshi.jpeg"
  },
  {
    name: "Rajdeep Majumder",
    designation: "Core Committee Member",
    phone: "+91 98910122047",
    email: "rajdeep.majumder.fiem.ece22@teamfuture.in",
    image: "/team/cc/rajdeep.jpeg"
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#121212] pt-20 text-white">
      {/* Page Title */}
      <section className="relative py-12 text-center">
        <motion.h1
          className="font-custom tracking-wider text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-[#FF2D55]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          CONTACT US
        </motion.h1>
      </section>

      {/* Team Members Grid */}
      <section className="py-10 pb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-black/50 backdrop-blur-md rounded-lg p-6 shadow-lg border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 text-center h-full">
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
                      {/* <Mail className="h-4 w-4 mr-2 text-pink-400" />  */}
                      {member.email}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 pt-2">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Contact Form and Contact Details - Side by Side */}
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            {/* Contact Form */}
              <div className="w-full md:w-2/3 bg-black/50 backdrop-blur-md p-6 rounded-lg border border-pink-500/20">
                <h2 className="text-2xl font-bold text-pink-500 mb-4">Get in Touch</h2>
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();

                    const form = e.target as HTMLFormElement;
                    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value || "";
                    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value || "";
                    const contact = (form.elements.namedItem("contact") as HTMLInputElement)?.value || "Not provided";
                    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value || "";

                    const subject = encodeURIComponent(`New Contact Form Submission from ${name}`);
                    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nContact: ${contact}\n\nMessage:\n${message}`);

                    const isAndroid = /Android/i.test(navigator.userAgent);
                    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

                    // ✅ Force Gmail app on Android
                    if (isAndroid) {
                      const gmailIntentURL = `intent://compose?to=xplorica@teamfuture.in&subject=${subject}&body=${body}#Intent;scheme=mailto;package=com.google.android.gm;end;`;
                      window.location.href = gmailIntentURL;
                    } 
                    // ✅ Open Gmail Web on iOS & Desktop
                    else {
                      const gmailWebURL = `https://mail.google.com/mail/?view=cm&fs=1&to=xplorica@teamfuture.in&su=${subject}&body=${body}`;
                      window.open(gmailWebURL, "_blank");
                    }
                  }}
                >
                  <input type="text" name="name" placeholder="Your Name" className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white" required />
                  <input type="email" name="email" placeholder="Your Email" className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white" required />
                  <input type="tel" name="contact" placeholder="Your Contact Number (Optional)" className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white" />
                  <textarea name="message" placeholder="Your Message" rows={4} className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md text-white" required />
                  <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md">Send Message</button>
                </form>
              </div>


            {/* XplOriCa Contact Details */}
            <div className="w-full md:w-1/3 bg-black/50 p-6 rounded-lg border border-pink-500/20">
              <h3 className="text-xl font-bold text-pink-500 mb-4">XplOriCa Contact</h3>
              <p className="flex items-center text-gray-300"><MapPin className="h-5 w-5 mr-2 text-pink-400" /><Link href="https://maps.app.goo.gl/WAQaJRpk8Vi1k1L2A" >Sonarpur Station Rd, Mission Pally, Narendrapur, Rajpur Sonarpur, West Bengal 700150</Link></p>
              
              <p className="flex items-center text-gray-300 mt-3"><Phone className="h-5 w-5 mr-2 text-pink-400" /> +91 98304 58324</p>
              {/* Email */}
              <p className="flex items-center text-gray-300 mt-3"><Mail className="h-5 w-5 mr-2 text-pink-400" /><Link href="mailto:xplorica@teamfuture.in" className="text-pink-400 hover:underline">xplorica@teamfuture.in</Link></p>
              {/* Website */}
              <p className="flex items-center text-gray-300 mt-3"><Globe className="h-5 w-5 mr-2 text-pink-400" /><Link href="https://xplorica.in" className="text-pink-400 hover:underline"> xplorica.in</Link></p>

            </div>
          </div>

          {/* Google Map - Full Width */}
          <div className="w-full rounded-lg overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.6191877399706!2d88.41285357506064!3d22.443354637695407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0272166e4cb263%3A0x27f12170efd9ddee!2sFuture%20Institute%20of%20Engineering%20and%20Management!5e0!3m2!1sen!2sin!4v1742068267193!5m2!1sen!2sin" width="100%" height="450" className="border-0" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}