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
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
    }}>
      <LanguageGreeting greeting={greeting} />
      <div className="loader" style={{
        width: '50px',
        height: '50px',
        border: '5px solid #333',
        borderTop: '5px solid #3498db',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }}></div>
    </div>
  );
}

export default LoadingScreen;