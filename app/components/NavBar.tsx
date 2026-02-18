import Link from 'next/link';
import styles from './NavBar.module.css';

export function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          Bgen Web App
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/examples" className={styles.link}>
            Examples
          </Link>
        </nav>
      </div>
    </header>
  );
}

