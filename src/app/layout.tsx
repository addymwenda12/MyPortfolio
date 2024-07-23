'use client';

import React, { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang='eng'>
      <body style={{
        fontFamily: 'Chillax, sans-serif',
        margin: 0,
        padding: 0,
      }}>
        {isLoading ? <LoadingScreen /> : children}
      </body>
    </html>
  )
}