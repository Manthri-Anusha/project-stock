import React from 'react';
import '../styles/ProfilePage.css';

function ProfilePage() {
  const accountBalance = 5375;
  const transactions = [
    { amount: 500, type: 'Withdraw', method: 'IMPS', date: 'Wed Aug 16 2023 02:16:34' },
    { amount: 1000, type: 'Deposit', method: 'net banking', date: 'Wed Aug 16 2023 00:15:24' },
    { amount: 1010, type: 'Withdraw', method: 'IMPS', date: 'Wed Aug 09 2023 14:32:55' },
  ];

  return (
    <div className="profile-page">
      <h1>My Account</h1>
      <div className="account-summary">
        <h2>Total Balance</h2>
        <p className="balance">${accountBalance.toFixed(2)}</p>
        <div className="action-buttons">
          <button className="add-funds">Add Funds</button>
          <button className="withdraw">Withdraw</button>
          <button className="transaction-history">Transaction History</button>
        </div>
      </div>
      <div className="transactions">
        <h2>Transactions</h2>
        <table>
          <thead>
            <tr>
              <th>Amount</th>
              <th>Type</th>
              <th>Payment Mode</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>${transaction.amount}</td>
                <td>{transaction.type}</td>
                <td>{transaction.method}</td>
                <td>{transaction.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProfilePage;