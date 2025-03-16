"use client";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import GALLERY_IMAGES from "./GALLERY_IMAGES.js";

const galleryItems = Array.from(GALLERY_IMAGES);

const categories = ["All", "Event Photos", "Competitions", "Behind the Scenes"];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handleNext = () => {
    setDirection(1);
    setSelectedImage((prev) => (prev! < galleryItems.length ? prev! + 1 : 1));
  };

  const handlePrevious = () => {
    setDirection(-1);
    setSelectedImage((prev) => (prev! > 1 ? prev! - 1 : galleryItems.length));
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white pt-20">
      <Head>
        <title>Gallery | Phoenix '25</title>
      </Head>

      {/* Title Section */}
      <section className="relative py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-[#FF2D55]">
            GALLERY
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Relive the moments from our past events.
          </p>
        </motion.div>
      </section>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${activeCategory === category
              ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group h-64"
                onClick={() => setSelectedImage(index)}
              >
                {/* Image Background */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Image Details */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-screen Image Viewer with Fixed Caption */}
      <AnimatePresence mode="wait">
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4"
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") handleNext();
              if (e.key === "ArrowLeft") handlePrevious();
              if (e.key === "Escape") setSelectedImage(null);
            }}
            tabIndex={0}
          >
            <button
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-all duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            {/* Previous Button */}
            <button
              className="absolute left-6 text-white hover:text-gray-300 transition-all duration-300"
              onClick={handlePrevious}
            >
              <ChevronLeft size={40} />
            </button>

            <div className="max-w-4xl max-h-[80vh] w-full relative overflow-hidden">
              {/* Sliding Animation */}
              <motion.div
                key={selectedImage}
                initial={{ x: direction === 1 ? "100%" : "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: direction === 1 ? "-100%" : "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative bg-gray-900 aspect-video rounded-lg flex items-center justify-center overflow-hidden"
              >
                <img
                  src={galleryItems.find((item, i) => i === selectedImage)?.image}
                  alt="Gallery Image"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Image Caption - Now Always Visible */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4 text-center">
                <h3 className="text-xl font-medium text-white">
                  {galleryItems.find((item, i) => i === selectedImage)?.title}
                </h3>
                <p className="text-gray-400">
                  {galleryItems.find((item, i) => i === selectedImage)?.category}
                </p>
              </div>
            </div>

            {/* Next Button */}
            <button
              className="absolute right-6 text-white hover:text-gray-300 transition-all duration-300"
              onClick={handleNext}
            >
              <ChevronRight size={40} />
            </button>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
