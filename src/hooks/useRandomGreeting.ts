'use client';

import { useState, useEffect } from "react";
import { greetings, Greetings } from "../lib/greetings";

export function useRandomGreeting(interval: number = 200) { // Changed to 200ms
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return greetings[currentIndex];
}