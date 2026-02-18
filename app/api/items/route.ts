import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    const items = await prisma.item.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(items);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch items' },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const title = typeof body.title === 'string' ? body.title.trim() : '';
    const description =
      typeof body.description === 'string' && body.description.trim().length > 0
        ? body.description.trim()
        : null;

    if (!title) {
      return NextResponse.json(
        { error: 'Title is required' },
        { status: 400 },
      );
    }

    const item = await prisma.item.create({
      data: {
        title,
        description: description ?? undefined,
      },
    });

    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create item' },
      { status: 500 },
    );
  }
}

