// src/app/utils/api.ts

export const fetchUserData = async () => {
  // Replace with actual API call
  const response = await fetch('/api/user');
  return response.json();
};

export const fetchLoanData = async () => {
  // Replace with actual API call
  const response = await fetch('/api/loans');
  return response.json();
};

export const fetchTransactionData = async () => {
  // Replace with actual API call
  const response = await fetch('/api/transactions');
  return response.json();
};
