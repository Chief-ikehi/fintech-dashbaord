import React, { useState } from 'react';

interface Loan {
  id: string;
  amount: number;
  tenure: string;
  purpose: string;
  status: string; // active or paid
}

const mockLoanData: Loan[] = [
  { id: '1', amount: 5000, tenure: '12 months', purpose: 'Business', status: 'active' },
  { id: '2', amount: 3000, tenure: '6 months', purpose: 'Education', status: 'paid' },
];

const LoanManagement: React.FC = () => {
  const [loans, setLoans] = useState<Loan[]>(mockLoanData);
  const [form, setForm] = useState({ amount: '', tenure: '', purpose: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { amount, tenure, purpose } = form;
    if (!amount || !tenure || !purpose) {
      setError('All fields are required.');
      return;
    }

    // Add the new loan to the list
    setLoans([
      ...loans,
      {
        id: (loans.length + 1).toString(),
        amount: parseFloat(amount),
        tenure,
        purpose,
        status: 'active',
      },
    ]);
    setForm({ amount: '', tenure: '', purpose: '' }); // Reset form
    setError('');
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-xl">
      <h3 className="mb-6 p-6 bg-blue-500 text-white rounded-lg shadow-lg">Loan History</h3>
      <ul className="space-y-4">
        {loans.map((loan) => (
          <li key={loan.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm">
            <div className="text-sm">
              <p className="font-semibold text-gray-700">
                {loan.amount} USD - {loan.purpose}
              </p>
              <p className="text-gray-500">{loan.tenure}</p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                loan.status === 'active' ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-800'
              }`}
            >
              {loan.status}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <h3 className="mb-6 p-6 bg-blue-500 text-white rounded-lg shadow-lg">Request a New Loan</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium mb-2 text-black">Amount (USD)</label>
            <input
              id="amount"
              type="number"
              name="amount"
              value={form.amount}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
          <div>
            <label
            htmlFor="tenure"
            className="block text-sm font-medium mb-2 text-black">Tenure</label>
            <select
              id="tenure"
              name="tenure"
              value={form.tenure}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            >
              <option value="">Select Tenure</option>
              <option value="6 months">6 months</option>
              <option value="12 months">12 months</option>
              <option value="24 months">24 months</option>
            </select>
          </div>
          <div>
            <label
            htmlFor="purpose"
            className="block text-sm font-medium mb-2 text-black">Purpose</label>
            <input
              id="purpose"
              type="text"
              name="purpose"
              value={form.purpose}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Request Loan
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanManagement;
