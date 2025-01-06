# Fintech Dashboard
A modern, interactive Fintech Dashboard built with Next.js, TypeScript, and Tailwind CSS. The dashboard fetches user data, displays account balances, and shows recent transactions.

## Setup Instructions
To get this project up and running locally, follow the steps below:
### 1. Clone the Repository
   ```bash
   git clone https://github.com/Chief-ikehi/fintech-dashbaord.git
   cd fintech-dashboard
   ```
### 2. Install Dependencies  
Make sure you have Node.js installed. Then run the following command to install the project dependencies:
  ```bash
  npm install
```
### 3. Set Up Environment Variables (if necessary)  
If your app requires any environment variables (e.g., for an API or database), create a .env.local file at the project's root and add your variables there. For now, no environment variables are required.

### 4. Run the Development Server  
```bash
npm run dev
```
This will start the development server at http://localhost:3000  

# Approach
## Technologies Used:
### 1. Next.js: 
A React framework for building server-side rendered applications.  
### 2. TypeScript: 
Used for type safety and better developer experience.  
### 3. Tailwind CSS: 
A utility-first CSS framework for styling the components.  
### 4. API Routes: 
Used to mock the user data, loans and transaction history with a simple API endpoint (/api/users, /api/loans, api/transactions).   

## Building the Dashboard:
### Project Setup:

* I created a new Next.js app using create-next-app with TypeScript support.
* Tailwind CSS was integrated into the project to enable utility-first CSS styling. Tailwind helps create responsive and clean UI without needing to write custom CSS.

### User Data Fetching:

* The application fetches user data from a mock API endpoint (/api/users).
* The mock API returns an array of users with details like name, account balance, and recent transactions.

### Loan Data Fetching:

* The application fetches loan data from a mock API endpoint (/api/loans).
* The mock API returns an array of loans with details like loan amount, tenure, and purpose.

### Transaction Data Fetching:

* The application fetches transaction data from a mock API endpoint (/api/transactions).
* The mock API returns an array of transactions with details like date, amount, and type.

### Rendering the Dashboard:

* The dashboard consists of five (5) main sections:
  1. User Info: Displays the user's name and account balance.
  2. Recent Transactions: Lists the user’s most recent transactions (e.g., credits and debits) along with their corresponding dates and amounts.
  3. Loan History: Allow users to view their loan history and details of the currently active loan.
  4. Request New Loan: Include a form to request a new loan, validating the input fields (e.g., amount, tenure, and purpose). 
  5. Transaction History: Render a table showing recent transactions, with the ability to: Sort by date, amount, or transaction type and Filter by transaction type (e.g., credit, debit). 

* The data is rendered dynamically using React's useState and useEffect hooks. Data fetching is done with the fetch API.

## Error Handling & Fallbacks:

* Proper error handling was added to catch and log any errors during the API fetch.
* Conditional rendering was implemented to display loading states and ensure the page doesn't break if any of the data is missing or incorrectly structured.

## User Interface:

* Tailwind CSS was used to style the landing page and dashboard components. I utilized Tailwind's utility classes to handle layout, colors, typography, and responsiveness.
* The user interface is designed to be simple, clean, and easy to navigate.

## Mock API (Backend):

* Simple mock APIs were created using Next.js API routes in the users/route.ts file, loans/route.ts file, and transactions/route.ts file. These files mimics a backend that returns static user data.
* The mock data includes basic user info such as name, account balance, recent transactions (credit/debit), loan amount, tenure, purpose, and date

## Deployment:

* The project can be deployed easily to Vercel (or any other platform supporting Next.js) by pushing the repository to GitHub and linking it with the Vercel dashboard (that's what i did )

  
# Why This Approach?

### 1. Scalability: 
Using Next.js and API routes gives the flexibility to scale the application easily, whether it involves adding more features or connecting it to a real database.
### 2. Performance: 
By using server-side rendering and static generation, the app can be made highly performant, even with large amounts of user data.
### 3. Developer Experience: 
TypeScript ensures type safety, reducing bugs during development. Tailwind CSS makes it easy to create a responsive and visually consistent UI.
### 4. Mock API: 
Using mock APIs ensures the frontend can be developed and tested independently from a real backend. This also simplifies deployment.


# Future Improvements
* Integrating with a real backend for dynamic user data.
* Adding authentication and user-specific data.
* Enhancing the UI with more advanced features such as charts, graphs, or dashboards.
* Improving error handling and adding more sophisticated loading states
* Extending unit testing to cover more components and edge cases.

# Unit Testing
To ensure the reliability and correctness of the application, unit testing has been implemented using Jest and React Testing Library.  

## Test Coverage Report
After running the test suite with the command:
``` bash
npm run test -- --coverage
```
The following is the Test Coverage Report for the project:  

 
```bash
PASS  src/app/dashboard/components/UserOverview.test.tsx  
PASS  src/app/dashboard/components/TransactionHistory.test.tsx

------------------------|---------|----------|---------|---------|----------------------------  
File                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s       
------------------------|---------|----------|---------|---------|----------------------------  
All files               |   72.72 |    58.06 |   76.92 |      75 |                              
 TransactionHistory.tsx |      70 |    51.85 |   72.72 |   72.22 | 28-29,34-36,47-48,68-80,92   
 UserOverview.tsx       |     100 |      100 |     100 |     100 |                              
------------------------|---------|----------|---------|---------|----------------------------

Test Suites: 2 passed, 2 total  
Tests:       5 passed, 5 total  
Snapshots:   1 passed, 1 total 
``` 
To view the full report, go to /Coverage/lcov-report/index.html
