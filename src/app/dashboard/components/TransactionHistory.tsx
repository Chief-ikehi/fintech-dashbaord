import React, { useState } from 'react';

interface Transaction {
  id: string;
  date: string;
  amount: number;
  type: 'credit' | 'debit';
}

const mockTransactions: Transaction[] = [
  { id: '1', date: '2025-01-01', amount: 200.5, type: 'credit' },
  { id: '2', date: '2024-12-28', amount: 150.0, type: 'debit' },
  { id: '3', date: '2024-12-20', amount: 50.75, type: 'credit' },
  { id: '4', date: '2024-12-18', amount: 300.0, type: 'debit' },
];

const TransactionHistory: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>(mockTransactions);
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>(null);
  const [filter, setFilter] = useState<'credit' | 'debit' | null>(null);

  const handleSort = (key: string) => {
    let sorted = [...transactions];
    let newDirection: 'asc' | 'desc' = 'asc';

    if (sortKey === key && sortDirection === 'asc') {
      newDirection = 'desc';
      sorted = sorted.reverse(); // Reverse the array if already sorted in ascending order
    } else {
      setSortDirection('asc');
      sorted = sorted.sort((a, b) => {
        if (key === 'amount') return a.amount - b.amount;
        if (key === 'date') return new Date(a.date).getTime() - new Date(b.date).getTime();
        if (key === 'type') return a.type.localeCompare(b.type);
        return 0;
      });
    }

    setSortKey(key);
    setSortDirection(newDirection);
    setTransactions(sorted);
  };

  const handleFilter = (type: 'credit' | 'debit') => {
    if (type === filter) {
      setFilter(null); // Remove filter
      setTransactions(mockTransactions);
    } else {
      setFilter(type);
      setTransactions(mockTransactions.filter((t) => t.type === type));
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-lg">
      <h3 className="mb-6 p-6 bg-blue-500 text-white rounded-lg shadow-lg">Recent Transaction History</h3>

      {/* Filter Buttons */}
      <div className="mb-4 flex space-x-2">
        <button
          onClick={() => handleFilter('credit')}
          className={`px-4 py-2 rounded ${filter === 'credit' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-black'}`}
        >
          Credit
        </button>
        <button
          onClick={() => handleFilter('debit')}
          className={`px-4 py-2 rounded ${filter === 'debit' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-black'}`}
        >
          Debit
        </button>
      </div>

      {/* Table */}
      <table className="w-full table-auto border-collapse shadow-inner">
        <thead className="bg-gray-100">
          <tr>
            <th
              onClick={() => handleSort('date')}
              className="cursor-pointer px-6 py-3 text-left text-sm font-medium text-gray-600 hover:text-gray-800"
            >
              Date {sortKey === 'date' && (sortDirection === 'asc' ? '⬆' : '⬇')}
            </th>
            <th
              onClick={() => handleSort('amount')}
              className="cursor-pointer px-6 py-3 text-left text-sm font-medium text-gray-600 hover:text-gray-800"
            >
              Amount {sortKey === 'amount' && (sortDirection === 'asc' ? '⬆' : '⬇')}
            </th>
            <th
              onClick={() => handleSort('type')}
              className="cursor-pointer px-6 py-3 text-left text-sm font-medium text-gray-600 hover:text-gray-800"
            >
              Type {sortKey === 'type' && (sortDirection === 'asc' ? '⬆' : '⬇')}
            </th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="border-t">
              <td className="px-6 py-3 text-sm text-black">{transaction.date}</td>
              <td className="px-6 py-3 text-sm text-black">
                ${transaction.amount.toFixed(2)}
              </td>
              <td className={`px-6 py-3 text-sm ${transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}`}>
                {transaction.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
