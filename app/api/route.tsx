import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('https://api.publicapis.org/entries', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const product = await res.json();
  return NextResponse.json({ product });
}
