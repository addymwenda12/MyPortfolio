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
      backgroundColor: '#272727',
      fontSize: '2rem',
      fontWeight: 'bold',
      fontFamily: 'Poppins, sans-serif',
      color: '#ffffff',
      zIndex: 9999,
      animation: 'gradientBG 5s ease infinite'
    }}>
      <LanguageGreeting greeting={greeting} />
    </div>
  );
}

export default LoadingScreen;