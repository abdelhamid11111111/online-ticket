// app/layout.tsx
import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

// Import the font and configure the weights/subsets
const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ['300','400','500','600','700','800'],
  subsets: ['latin'],
  display: 'swap', // optional
});

export const metadata = {
  title: 'TicketFlow',
  description: 'Event discovery app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Apply font class to html or body
    <html lang="en" className={plusJakartaSans.className}>
      <body>{children}</body>
    </html>
  );
}
