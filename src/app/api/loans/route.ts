// app/api/loans/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  // Mock loan data
  const loans = [
    { id: '1', amount: 5000, tenure: '12 months', purpose: 'Business', status: 'active' },
    { id: '2', amount: 3000, tenure: '6 months', purpose: 'Education', status: 'paid' },
  ];

  return NextResponse.json(loans);
}
