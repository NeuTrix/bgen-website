import { Container } from '@/app/components/Container';
import { prisma } from '@/lib/db';
import { NewItemForm } from './NewItemForm';
import styles from './page.module.css';

export const dynamic = 'force-dynamic';

export default async function ExamplesPage() {
  const items = await prisma.item.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <Container>
      <div className={styles.header}>
        <div>
          <div className={styles.kicker}>Example</div>
          <h1 className={styles.title}>Items</h1>
          <p className={styles.subhead}>
            A simple fullstack feature using an API route and PostgreSQL (via Prisma).
          </p>
        </div>
      </div>

      <section className={styles.section}>
        <h2 className={styles.h2}>Add a new item</h2>
        <NewItemForm />
      </section>

      <section className={styles.section}>
        <h2 className={styles.h2}>Items</h2>
        {items.length === 0 ? (
          <p>No items yet. Add one above to get started.</p>
        ) : (
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item.id} className={styles.listItem}>
                <div className={styles.itemTitle}>{item.title}</div>
                {item.description ? <div className={styles.itemDesc}>{item.description}</div> : null}
              </li>
            ))}
          </ul>
        )}
      </section>
    </Container>
  );
}

