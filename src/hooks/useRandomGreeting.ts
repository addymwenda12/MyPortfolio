'use client';

import { useState, useEffect } from "react";
import { greetings, Greetings } from "../lib/greetings";

export function useRandomGreeting(interval: number = 200) {
  const [currentGreeting, setCurrentGreeting] = useState<Greetings>(greetings[0]);

  useEffect(() => {
    const changeGreeting = () => {
      const randomIndex = Math.floor(Math.random() * greetings.length);
      setCurrentGreeting(greetings[randomIndex]);
    };

    const timer = setInterval(changeGreeting, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return currentGreeting;
}