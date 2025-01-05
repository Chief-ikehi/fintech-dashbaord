import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TransactionHistory from './TransactionHistory';

describe('TransactionHistory Component', () => {
  test('renders transaction history table with mock data', () => {
    render(<TransactionHistory />);

    // Check if table headers are rendered
    expect(screen.getByText('Date')).toBeInTheDocument();
    expect(screen.getByText('Amount')).toBeInTheDocument();
    expect(screen.getByText('Type')).toBeInTheDocument();

    // Check if mock transactions are displayed
    expect(screen.getByText('2025-01-01')).toBeInTheDocument();
    expect(screen.getByText('$200.50')).toBeInTheDocument();

    // Use getAllByText to check for multiple 'credit' rows
    const creditRows = screen.getAllByText('credit');
    expect(creditRows.length).toBe(2);  // Adjust based on the expected number of 'credit' rows
  });

  test('filters transactions by credit type', () => {
    render(<TransactionHistory />);

    const creditFilterButton = screen.getByText('Credit');
    fireEvent.click(creditFilterButton);

    // Check if only credit transactions are displayed
    const creditRows = screen.getAllByText('credit');
    expect(creditRows.length).toBe(2);  // Adjust this based on the number of filtered credit transactions
    expect(screen.queryByText('debit')).not.toBeInTheDocument();
  });

  test('sorts transactions by amount', () => {
    render(<TransactionHistory />);

    const amountHeader = screen.getByText('Amount');
    fireEvent.click(amountHeader);

    // Check if transactions are sorted by amount
    const rows = screen.getAllByRole('row'); // Get all rows
    const sortedAmounts = rows.slice(1).map((row) => {  // Skip the header row
    const amountCell = row.querySelector('td:nth-child(2)'); // Assuming the amount is in the 2nd column
    return parseFloat(amountCell?.textContent?.replace('$', '').trim() || '0'); // Handle possible null or undefined
    });


    // Check if the amounts are sorted
    const isSorted = sortedAmounts.every(
      (val, i, arr) => !i || arr[i - 1] <= val
    );
    expect(isSorted).toBe(true);
  });

  test('matches snapshot', () => {
  const { asFragment } = render(<TransactionHistory />);
  expect(asFragment()).toMatchSnapshot();
   });

});
