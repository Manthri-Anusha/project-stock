import React, { useState } from 'react';
import '../styles/AdminPanel.css';

function AdminPanel() {
  const [activeTab, setActiveTab] = useState('users');

  const users = [
    { id: '5e23b9c71b8e3e1234a56789', username: 'john', email: 'john@gmail.com', balance: 5375 },
    { id: '5e23b9c71b8e3e1234a56790', username: 'jane', email: 'jane@gmail.com', balance: 10217 },
  ];

  const transactions = [
    { id: '5e23b9c71b8e3e1234a56791', userId: '5e23b9c71b8e3e1234a56789', amount: 500, action: 'Withdraw', paymentMode: 'IMPS', time: 'Wed Aug 16 2023 02:16:34' },
    { id: '5e23b9c71b8e3e1234a56792', userId: '5e23b9c71b8e3e1234a56789', amount: 1000, action: 'Deposit', paymentMode: 'net banking', time: 'Wed Aug 16 2023 00:15:24' },
    { id: '5e23b9c71b8e3e1234a56793', userId: '5e23b9c71b8e3e1234a56790', amount: 2000, action: 'Deposit', paymentMode: 'net banking', time: 'Wed Aug 15 2023 14:57:23' },
  ];

  return (
    <div className="admin-panel">
      <h1>SB Stocks Admin Panel</h1>
      <div className="tab-buttons">
        <button onClick={() => setActiveTab('users')} className={activeTab === 'users' ? 'active' : ''}>Users</button>
        <button onClick={() => setActiveTab('transactions')} className={activeTab === 'transactions' ? 'active' : ''}>Transactions</button>
      </div>
      {activeTab === 'users' && (
        <div className="users-table">
          <h2>All Users</h2>
          <table>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>${user.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {activeTab === 'transactions' && (
        <div className="transactions-table">
          <h2>All Transactions</h2>
          <table>
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>User ID</th>
                <th>Amount</th>
                <th>Action</th>
                <th>Payment Mode</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td>{transaction.id}</td>
                  <td>{transaction.userId}</td>
                  <td>${transaction.amount}</td>
                  <td>{transaction.action}</td>
                  <td>{transaction.paymentMode}</td>
                  <td>{transaction.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default AdminPanel;