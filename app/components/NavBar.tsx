import Link from 'next/link';
import styles from './NavBar.module.css';

export function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/#top" className={styles.brand} aria-label="BrandGeneering">
          <img
            className={styles.logo}
            src="https://static.wixstatic.com/media/a6f094_9f67b85f529a44b984ac5c78fcefcdf0~mv2_d_1324_1305_s_2.png"
            alt="BrandGeneering Consulting"
            width={40}
            height={40}
            loading="eager"
            decoding="async"
          />
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
        </nav>
      </div>
    </header>
  );
}

