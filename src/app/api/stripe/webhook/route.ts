import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const payload = await request.text();
  console.log('Stripe webhook received', payload.length);
  return NextResponse.json({ received: true });
}
