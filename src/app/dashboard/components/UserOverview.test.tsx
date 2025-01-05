import React from 'react';
import { render, screen } from '@testing-library/react';
import UserOverview from './UserOverview';

describe('UserOverview Component', () => {
  test('displays user info correctly', () => {
    const user = {
      name: 'Ikehi Michael',
      accountBalance: 5000.75,
      recentTransactions: [
        { id: '1', amount: 200.5, date: '2025-01-01', type: 'credit' },
        { id: '2', amount: 150.0, date: '2024-12-28', type: 'debit' },
      ],
    };

    render(<UserOverview user={user} />);

    // Check if user name and account balance are rendered correctly
    expect(screen.getByText('Welcome, Ikehi Michael')).toBeInTheDocument();
    const balance = screen.getByText('$5000.75');
    expect(balance).toBeInTheDocument();
  });
});
