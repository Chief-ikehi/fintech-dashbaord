// app/api/transactions/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const transactions = [
    { id: '1', date: '2025-01-01', amount: 200.5, type: 'credit' },
    { id: '2', date: '2024-12-28', amount: 150.0, type: 'debit' },
    { id: '3', date: '2024-12-20', amount: 50.75, type: 'credit' },
    { id: '4', date: '2024-12-18', amount: 300.0, type: 'debit' },
  ];

  return NextResponse.json(transactions);
}
