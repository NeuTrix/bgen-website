import Link from 'next/link';
import { Container } from './components/Container';

export default function HomePage() {
  return (
    <Container>
      <h1>Bgen Fullstack Starter</h1>
      <p>
        This is a minimal fullstack web application built with Next.js (React + TypeScript) and
        PostgreSQL via Prisma.
      </p>
      <p>
        Visit the{' '}
        <Link href="/examples">
          <strong>Examples</strong>
        </Link>{' '}
        page to see a simple fullstack feature.
      </p>
    </Container>
  );
}

