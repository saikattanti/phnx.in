"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onFinish();
    }, 2500); // Loading time: 2.5s

    return () => clearTimeout(timer);
  }, [onFinish]);

  return isVisible ? (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Swapping & Jumping Emoji Animation */}
      <motion.div
        className="flex space-x-3 text-5xl text-white"
        animate={{ x: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        <motion.span
          animate={{ y: [-10, 10, -10], x: [0, 20, -20, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          className="text-red-500"
        >
          ⭕
        </motion.span>
        <motion.span
          animate={{ y: [10, -10, 10], x: [0, -20, 20, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          className="text-pink-500"
        >
          ⛛
        </motion.span>
        <motion.span
          animate={{ y: [-10, 10, -10], x: [0, 20, -20, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          className="text-purple-500"
        >
          ⬜
        </motion.span>
      </motion.div>
    </motion.div>
  ) : null;
}
