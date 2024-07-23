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
      <body>
        {isLoading ? <LoadingScreen /> : children}
      </body>
    </html>
  )
}