"use client";

import { useState, useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";

export default function WelcomeMessage({ messages }: { messages: string[] }) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 10000);
    return () => clearInterval(intervalId);
  }, [messages]);
  return (
    <div className="bannergradient py-3">
      <AnimatePresence mode="wait">
        <motion.h1
          className="text-center"
          key={currentMessageIndex}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to Luminate!{" "}
          <span className="font-thin">{messages[currentMessageIndex]}</span>
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
