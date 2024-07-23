'use client';

import React from "react";
import { useRandomGreeting } from "../hooks/useRandomGreeting";
import LanguageGreeting from './LanguageGreeting';

const LoadingScreen: React.FC = () => {
  const greeting = useRandomGreeting();

  return (
    <div className="loading-screen">
      <LanguageGreeting greeting={greeting} />
      <div className="loader"></div>
    </div>
  );
}

export default LoadingScreen;