'use client';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

interface UserData {
  name: string;
  accountBalance: number;
  recentTransactions: { id: string; amount: number; date: string; type: string }[];
}


const UserOverview = dynamic(() => import('./components/UserOverview'));
const LoanManagement = dynamic(() => import('./components/LoanManagement'));
const TransactionHistory = dynamic(() => import('./components/TransactionHistory'));

// Mock data for testing
const mockUserData = {
  name: 'Ikehi Michael',
  accountBalance: 5000.75,
  recentTransactions: [
    { id: '1', amount: 200.5, date: '2025-01-01', type: 'credit' },
    { id: '2', amount: 150.0, date: '2024-12-28', type: 'debit' },
    { id: '3', amount: 50.75, date: '2024-12-20', type: 'credit' },
  ],
};

export default function DashboardPage() {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    // Simulating an API call with setTimeout
    setTimeout(() => {
      setUser(mockUserData);
    }, 1000);
  }, []);

  return (
    <div>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">User Overview</h2>
        {user ? (
          <UserOverview user={user} />
        ) : (
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p className="text-black">Loading user data...</p>
          </div>
        )}
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Loan Management</h2>
        <LoanManagement />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
        <TransactionHistory />
      </section>
    </div>

  );
}
