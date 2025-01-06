'use client';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
const UserOverview = dynamic(() => import('./components/UserOverview'));
const LoanManagement = dynamic(() => import('./components/LoanManagement'));
const TransactionHistory = dynamic(() => import('./components/TransactionHistory'));

interface User {
  name: string;
  accountBalance: number;
  recentTransactions: { id: string; amount: number; date: string; type: string }[];
}

interface Loan {
  id: string;
  amount: number;
  tenure: string;
  purpose: string;
  status: string; // active or paid
}

interface Transaction {
  id: string;
  date: string;
  amount: number;
  type: 'credit' | 'debit';
}

const DashboardPage: React.FC = () => {
  const [userData, setUserData] = useState<User | null>(null);
  const [loansData, setLoansData] = useState<Loan[]>([]);
  const [transactionsData, setTransactionsData] = useState<Transaction[]>([]);

  useEffect(() => {
    // Fetch User Data
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Fetch Loans Data
    const fetchLoansData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/loans`);
        const data = await response.json();
        setLoansData(data);
      } catch (error) {
        console.error('Error fetching loans data:', error);
      }
    };

    // Fetch Transactions Data
    const fetchTransactionsData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/transactions`);
        const data = await response.json();
        setTransactionsData(data);
      } catch (error) {
        console.error('Error fetching transactions data:', error);
      }
    };

    // Call all fetch functions on component mount
    fetchUserData();
    fetchLoansData();
    fetchTransactionsData();
  }, []);

  if (!userData || !loansData || !transactionsData) {
    return <p>Loading...</p>; // Show loading message while data is being fetched
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">User Overview</h2>
        <UserOverview />
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
};

export default DashboardPage;
