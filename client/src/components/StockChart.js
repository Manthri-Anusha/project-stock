import React from 'react';
import { Line } from 'react-chartjs-2';
import '../styles/StockChart.css';

function StockChart() {
  // This is a placeholder for chart data. In a real application, you'd fetch this data from an API.
  const chartData = {
    labels: ['09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30'],
    datasets: [
      {
        label: 'Stock Price',
        data: [220, 218, 225, 215, 220, 218, 222],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'TSLA NASDAQ'
      }
    }
  };

  return (
    <div className="stock-chart">
      <div className="chart-container">
        <Line data={chartData} options={options} />
      </div>
      <div className="trade-panel">
        <h2>Trade</h2>
        <select>
          <option>Buy</option>
          <option>Sell</option>
        </select>
        <input type="number" placeholder="Quantity" />
        <p>Total Price: $0.00</p>
        <button className="trade-button">Place Order</button>
      </div>
    </div>
  );
}

export default StockChart;