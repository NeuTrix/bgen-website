import type { ReactNode } from 'react';
import './globals.css';
import { NavBar } from './components/NavBar';

export const metadata = {
  title: 'BrandGeneering',
  description: 'Marketing Strategy and Technology',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <footer
          style={{
            borderTop: '1px solid var(--border)',
            background: 'rgba(0,0,0,0.15)',
          }}
        >
          <div
            style={{
              maxWidth: 'var(--maxw)',
              margin: '0 auto',
              padding: '2rem 1.25rem',
              display: 'flex',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>BrandGeneering</div>
            <a
              href="mailto:consulting@brandgeneering.com"
              style={{ color: 'rgba(255,255,255,0.78)', textDecoration: 'none', fontWeight: 650 }}
            >
              consulting@brandgeneering.com
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}

