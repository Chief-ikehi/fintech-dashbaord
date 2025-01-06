'use client';
import React, { useEffect, useState } from 'react';

interface UserData {
  name: string;
  accountBalance: number;
  recentTransactions: { id: string; amount: number; date: string; type: string }[];
}

const UserOverview: React.FC = () => {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://fintech-dashbaord.vercel.app/api/users');
        const data = await response.json();
        // Ensure recentTransactions is an array, fallback to empty array if not
        const userData = {
          ...data,
          recentTransactions: data.recentTransactions || [],
        };
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      {/* User Info */}
      <div className="mb-6 p-6 bg-blue-500 text-white rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold">Welcome, {user.name}</h3>
        <p className="text-lg mt-2">
          Account Balance: <span className="font-bold text-2xl">${user.accountBalance ? user.accountBalance.toFixed(2) : '0.00'}</span>
        </p>
      </div>

      {/* Recent Transactions */}
      <div>
        <h4 className="text-xl font-semibold mb-4 text-black">Recent Transactions</h4>
        <ul className="space-y-4">
          {user.recentTransactions && Array.isArray(user.recentTransactions) && user.recentTransactions.length > 0 ? (
            user.recentTransactions.map((transaction) => (
              <li
                key={transaction.id}
                className={`flex justify-between text-sm p-3 rounded-lg
                  ${transaction.type === 'credit' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}
              >
                <span>{transaction.date}</span>
                <span>{transaction.type === 'credit' ? '+' : '-'}${transaction.amount && !isNaN(transaction.amount) ? transaction.amount.toFixed(2) : '0.00'}</span>
              </li>
            ))
          ) : (
            <p>No transactions available.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserOverview;
