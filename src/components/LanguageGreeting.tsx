'use client';

import React from "react";
import { Greetings } from "../lib/greetings";

interface LanguageGreetingProps {
  greeting: Greetings;
}

const LanguageGreeting: React.FC<LanguageGreetingProps> = ({ greeting }) => {
  return (
    <div className="language-greeting" style={{
      textAlign: 'center',
      transition: 'opacity 0.1s ease-in-out',
    }}>
      <h2 style={{ margin: '0 0 0.5rem 0', fontSize: '3rem'}}>{greeting.text}</h2>
      <p style={{ margin: 0, fontSize: '1rem', opacity: 0.7}}>{greeting.language}</p>
    </div>
  );
};

export default LanguageGreeting;