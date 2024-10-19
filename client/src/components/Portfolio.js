import React from 'react';
import '../styles/Portfolio.css';

function Portfolio() {
  const portfolioStocks = [
    { exchange: 'NASDAQ', name: 'Apple Inc', symbol: 'AAPL', shares: 10, price: 150.25, totalValue: 1502.50 },
    { exchange: 'NASDAQ', name: 'Microsoft', symbol: 'MSFT', shares: 5, price: 300.50, totalValue: 1502.50 },
    { exchange: 'NASDAQ', name: 'Amazon', symbol: 'AMZN', shares: 2, price: 3300.75, totalValue: 6601.50 },
    { exchange: 'NASDAQ', name: 'Tesla', symbol: 'TSLA', shares: 8, price: 700.30, totalValue: 5602.40 },
  ];

  return (
    <div className="portfolio">
      <h1>My Portfolio</h1>
      <input type="text" placeholder="Search stocks" className="search-input" />
      <table className="portfolio-table">
        <thead>
          <tr>
            <th>Exchange</th>
            <th>Stock Name</th>
            <th>Symbol</th>
            <th>Shares</th>
            <th>Stock Price</th>
            <th>Total Value</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {portfolioStocks.map((stock, index) => (
            <tr key={index}>
              <td>{stock.exchange}</td>
              <td>{stock.name}</td>
              <td>{stock.symbol}</td>
              <td>{stock.shares}</td>
              <td>${stock.price.toFixed(2)}</td>
              <td>${stock.totalValue.toFixed(2)}</td>
              <td><button className="view-chart">View Chart</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Portfolio;