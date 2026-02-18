import { Container } from '@/app/components/Container';
import { prisma } from '@/lib/db';
import { NewItemForm } from './NewItemForm';

export const dynamic = 'force-dynamic';

export default async function ExamplesPage() {
  const items = await prisma.item.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <Container>
      <h1>Example: Items</h1>
      <p>This page demonstrates a simple fullstack feature using an API route and PostgreSQL.</p>

      <section>
        <h2>Add a new item</h2>
        <NewItemForm />
      </section>

      <section>
        <h2>Items</h2>
        {items.length === 0 ? (
          <p>No items yet. Add one above to get started.</p>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <strong>{item.title}</strong>
                {item.description ? ` – ${item.description}` : null}
              </li>
            ))}
          </ul>
        )}
      </section>
    </Container>
  );
}

