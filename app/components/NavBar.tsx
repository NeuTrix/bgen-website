import Link from 'next/link';
import styles from './NavBar.module.css';
import { ButtonLink } from './Button';

export function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/#top" className={styles.brand} aria-label="BrandGeneering">
          <span className={styles.brandTop}>BrandGeneering</span>
          <span className={styles.brandBottom}>consulting</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/#top" className={styles.link}>
            Home
          </Link>
          <Link href="/#marketing-strategy" className={styles.link}>
            Marketing Strategy
          </Link>
          <Link href="/#technology" className={styles.link}>
            Technology
          </Link>
          <Link href="/#interim-cmo" className={styles.link}>
            Interim CMO
          </Link>
          <Link href="/#contact" className={styles.link}>
            Contact
          </Link>
          <ButtonLink href="/examples" variant="primary" size="small">
            Examples
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}

