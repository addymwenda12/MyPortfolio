import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Addy Mutuiri',
  description: 'A showcase of my works and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='eng'>
      <body>
        {children}
      </body>
    </html>
  );
}