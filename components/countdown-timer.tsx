"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const [hasMounted, setHasMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setHasMounted(true); // Set mounted state to true after hydration

    const calculateTimeLeft = (): TimeLeft => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!hasMounted) {
    return <div className="text-gray-400">Loading...</div>; // Placeholder to prevent hydration mismatch
  }

  return (
    <div className="flex justify-center items-center space-x-4 md:space-x-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <motion.div
          key={unit}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 md:w-24 h-16 md:h-24 bg-black/60 backdrop-blur-sm rounded-lg border border-pink-500/30 flex items-center justify-center mb-2">
            <span className="text-2xl md:text-4xl font-bold text-[#FF2D55]">
              {value.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs md:text-sm text-gray-400 uppercase">
            {unit}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default CountdownTimer;
