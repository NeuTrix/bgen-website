'use client';

import { FormEvent, useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';

export function NewItemForm() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      setError('Title is required');
      return;
    }

    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: trimmedTitle,
          description: description.trim() || undefined,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setError(data?.error ?? 'Failed to create item');
        return;
      }

      setTitle('');
      setDescription('');
      startTransition(() => {
        router.refresh();
      });
    } catch (_error) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Title
          <br />
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Description (optional)
          <br />
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            rows={3}
          />
        </label>
      </div>
      {error ? <p style={{ color: 'red' }}>{error}</p> : null}
      <button type="submit" disabled={isPending}>
        {isPending ? 'Saving...' : 'Add item'}
      </button>
    </form>
  );
}

