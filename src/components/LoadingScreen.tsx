'use client';

import React from "react";
import { useRandomGreeting } from "../hooks/useRandomGreeting";
import LanguageGreeting from './LanguageGreeting';

const LoadingScreen: React.FC = () => {
  const greeting = useRandomGreeting();

  return (
    <div className="loading-screen" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
      fontSize: '2em',
      fontWeight: 'bold',
    }}>
      <LanguageGreeting greeting={greeting} />
    </div>
  );
}

export default LoadingScreen;