import Link from 'next/link';
import { Container } from './components/Container';
import styles from './page.module.css';
import { ButtonLink } from './components/Button';

export default function HomePage() {
  return (
    <Container>
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.kicker}>Marketing Strategy and Technology</div>
          <h1 className={styles.title}>
            Build, refine, and scale your brand—through strategy, systems, and execution.
          </h1>
          <p className={styles.lede}>
            A pragmatic consulting-style starter that pairs a clean front-end with a real database
            foundation (Next.js + PostgreSQL via Prisma).
          </p>
          <div className={styles.heroCtas}>
            <ButtonLink href="mailto:consulting@brandgeneering.com" variant="primary">
              Let’s talk
            </ButtonLink>
            <Link className={styles.secondaryLink} href="/examples">
              View examples →
            </Link>
          </div>
        </div>

        <div className={styles.heroRight} aria-hidden="true">
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Focus</div>
            <div className={styles.statValue}>Strategy + Tech</div>
            <div className={styles.statHint}>Simple, shippable, measurable.</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statLabel}>Stack</div>
            <div className={styles.statValue}>Next.js + Postgres</div>
            <div className={styles.statHint}>Fast iteration with real data.</div>
          </div>
        </div>
      </section>

      <section className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardTop}>Marketing strategy</div>
          <h2 className={styles.cardTitle}>Build your brand equity</h2>
          <p className={styles.cardBody}>
            Positioning, architecture, digital strategy, innovation, customer research, and
            go-to-market planning—organized into an actionable plan.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTop}>Technology</div>
          <h2 className={styles.cardTitle}>Web apps & digital</h2>
          <p className={styles.cardBody}>
            Prototypes and production foundations for frontends, APIs, and full-stack web apps with
            modern tooling and a focus on shipping.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTop}>Interim CMO</div>
          <h2 className={styles.cardTitle}>C-suite support</h2>
          <p className={styles.cardBody}>
            Senior-level marketing leadership to keep the function moving—planning, coaching,
            execution oversight, and agency management.
          </p>
        </div>
      </section>
    </Container>
  );
}

