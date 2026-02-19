import Link from 'next/link';
import styles from './NavBar.module.css';
import { ButtonLink } from './Button';

export function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label="BrandGeneering">
          <span className={styles.brandTop}>BrandGeneering</span>
          <span className={styles.brandBottom}>consulting</span>
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/examples" className={styles.link}>
            Examples
          </Link>
          <ButtonLink href="mailto:consulting@brandgeneering.com" variant="primary" size="small">
            Contact
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}

