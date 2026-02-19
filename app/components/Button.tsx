import Link from 'next/link';
import type { ComponentProps } from 'react';
import styles from './Button.module.css';

type Variant = 'default' | 'primary';
type Size = 'default' | 'small';

export function ButtonLink({
  href,
  children,
  variant = 'default',
  size = 'default',
  className,
  ...props
}: ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  const classes = [
    styles.button,
    variant === 'primary' ? styles.primary : null,
    size === 'small' ? styles.small : null,
    className ?? null,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = 'default',
  size = 'default',
  className,
  ...props
}: ComponentProps<'button'> & { variant?: Variant; size?: Size }) {
  const classes = [
    styles.button,
    variant === 'primary' ? styles.primary : null,
    size === 'small' ? styles.small : null,
    className ?? null,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

