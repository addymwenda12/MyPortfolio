'use client';

import React from "react";
import { Greetings } from "../lib/greetings";

interface LanguageGreetingProps {
  greeting: Greetings;
}

const LanguageGreeting: React.FC<LanguageGreetingProps> = ({ greeting }) => {
  return (
    <div className="language-greeting">
      <h2>{greeting.text}</h2>
      <p>{greeting.language}</p>
    </div>
  );
};

export default LanguageGreeting;