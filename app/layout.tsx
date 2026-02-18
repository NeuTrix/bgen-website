import type { ReactNode } from 'react';
import './globals.css';
import { NavBar } from './components/NavBar';

export const metadata = {
  title: 'Bgen Web App',
  description: 'Fullstack Next.js + Postgres starter',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}

