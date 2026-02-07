import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));
  console.log('Mercado Pago webhook received', payload);
  return NextResponse.json({ received: true });
}
