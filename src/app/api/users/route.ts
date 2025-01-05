/*import { NextResponse } from 'next/server';

export async function GET() {
  // Mock user data
  const users = [
    { id: '1',
    name: 'Ikehi Michael',
    amount: 5000.75,
    date: '2025-01-01',
    recentTransactions: [
    { id: '1', amount: 200.5, date: '2025-01-01', type: 'credit' },
    { id: '2', amount: 150.0, date: '2024-12-28', type: 'debit' },
    { id: '3', amount: 50.75, date: '2024-12-20', type: 'credit' }
    ]
     },
 ];

  return NextResponse.json(users);
}*/

import { NextRequest, NextResponse } from 'next/server';

const userData = {
  id: '1',
  name: 'John Doe',
  amount: 5000.75,
  date: '2025-01-01',
  recentTransactions: [
    { id: '1', amount: 200.5, date: '2025-01-01', type: 'credit' },
    { id: '2', amount: 150.0, date: '2024-12-28', type: 'debit' },
    { id: '3', amount: 50.75, date: '2024-12-20', type: 'credit' },
  ],
};

// Named export for the GET method
export async function GET(req: NextRequest) {
  return NextResponse.json(userData);