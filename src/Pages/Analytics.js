import React, { useState } from "react";
import AdminNav from '../components/AdminNav';
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function Analytics() {
  const [dateRange, setDateRange] = useState('month');
  const [category, setCategory] = useState('all');
  const [region, setRegion] = useState('all');

  // Example data for charts
  const barData = {
    labels: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
    datasets: [
      {
        label: "Product Ratings",
        data: [5, 10, 15, 25, 45],
        backgroundColor: ["#f94144", "#f3722c", "#f9c74f", "#90be6d", "#43aa8b"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1.5,
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart'
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true,
          padding: 15,
          font: {
            size: 11
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 13
        },
        bodyFont: {
          size: 12
        }
      }
    }
  };

  const lineOptions = {
    ...chartOptions,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    elements: {
      line: {
        tension: 0.4
      },
      point: {
        radius: 4,
        hoverRadius: 6
      }
    }
  };

  const pieOptions = {
    ...chartOptions,
    cutout: '60%',
    plugins: {
      ...chartOptions.plugins,
      legend: {
        ...chartOptions.plugins.legend,
        position: 'right'
      }
    }
  };

  // Update the line data with gradient
  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Eco-Friendly Purchases",
        data: [10, 25, 50, 75, 100, 125],
        fill: true,
        backgroundColor: 'rgba(67, 170, 139, 0.1)',
        borderColor: "#43aa8b",
        tension: 0.4,
      },
      {
        label: "User Engagement",
        data: [5, 15, 35, 60, 85, 110],
        fill: true,
        backgroundColor: 'rgba(243, 114, 44, 0.1)',
        borderColor: "#f3722c",
        tension: 0.4,
      },
    ],
  };

  const pieData = {
    labels: ['Electronics', 'Household', 'Fashion', 'Food', 'Beauty'],
    datasets: [{
      data: [30, 25, 20, 15, 10],
      backgroundColor: [
        'rgba(255, 107, 107, 0.8)',
        'rgba(78, 205, 196, 0.8)',
        'rgba(69, 183, 209, 0.8)',
        'rgba(150, 206, 180, 0.8)',
        'rgba(255, 238, 173, 0.8)'
      ],
      hoverBackgroundColor: [
        'rgba(255, 107, 107, 1)',
        'rgba(78, 205, 196, 1)',
        'rgba(69, 183, 209, 1)',
        'rgba(150, 206, 180, 1)',
        'rgba(255, 238, 173, 1)'
      ],
      borderWidth: 2,
      borderColor: '#ffffff'
    }],
  };

  const recentActivities = [
    { time: '2 mins ago', action: 'Bamboo Toothbrush purchased', rating: 5 },
    { time: '5 mins ago', action: 'Reusable Water Bottle viewed', rating: 4 },
    { time: '10 mins ago', action: 'Eco-friendly Detergent rated', rating: 5 },
  ];

  const actionableInsights = [
    "Increase visibility of eco-badges on product pages to drive more eco-friendly purchases",
    "Promote top-rated bamboo products based on high user satisfaction",
    "Consider expanding the reusable container category due to growing demand",
  ];

  return (
    <div className="analytics-page">
      <AdminNav />
      <div className="container-fluid p-4">
        <header className="mb-5">
          <h1 className="display-4">Analytics Dashboard</h1>
          <p className="text-muted lead">Track eco-friendly shopping trends and user engagement</p>
        </header>

        {/* Filters */}
        {/* <div className="row mb-4">
          <div className="col-md-4">
            <select 
              className="form-select" 
              value={dateRange} 
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="year">Last Year</option>
            </select>
          </div> */}
          {/* <div className="col-md-4">
            <select 
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="household">Household</option>
              <option value="electronics">Electronics</option>
            </select>
          </div> */}
          {/* <div className="col-md-4">
            <select 
              className="form-select"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              <option value="all">All Regions</option>
              <option value="north">North</option>
              <option value="south">South</option>
            </select>
          </div>
        </div> */}

        {/* Summary Cards */}
        <div className="row mb-4">
          <div className="col-md-3">
            <div className="card bg-success text-white h-100">
              <div className="card-body">
                <h6 className="card-subtitle mb-2">Total Eco-Products Sold</h6>
                <h2 className="card-title">1,234</h2>
                <p className="card-text small">↑ 15% from last month</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-info text-white h-100">
              <div className="card-body">
                <h6 className="card-subtitle mb-2">Active Users</h6>
                <h2 className="card-title">856</h2>
                <p className="card-text small">↑ 23% new eco-shoppers</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-warning text-white h-100">
              <div className="card-body">
                <h6 className="card-subtitle mb-2">CO₂ Saved</h6>
                <h2 className="card-title">2.5 tons</h2>
                <p className="card-text small">Equivalent to 120 trees</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card bg-primary text-white h-100">
              <div className="card-body">
                <h6 className="card-subtitle mb-2">Waste Reduced</h6>
                <h2 className="card-title">850 kg</h2>
                <p className="card-text small">↑ 30% from last month</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="row mb-4">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-3">Eco-Friendliness Trends</h5>
                <div style={{ height: '300px' }}>
                  <Line data={lineData} options={lineOptions} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-3">Category Distribution</h5>
                <div style={{ height: '300px' }}>
                  <Pie data={pieData} options={pieOptions} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Top Performing Products</h5>
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Eco Rating</th>
                        <th>Purchases</th>
                        <th>Avg. Rating</th>
                        <th>CO₂ Saved</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Reusable Water Bottle</td>
                        <td>
                          <span className="badge bg-success">5 Stars</span>
                        </td>
                        <td>320</td>
                        <td>4.8</td>
                        <td>150kg</td>
                      </tr>
                      <tr>
                        <td>Bamboo Toothbrush</td>
                        <td>
                          <span className="badge bg-success">5 Stars</span>
                        </td>
                        <td>280</td>
                        <td>4.7</td>
                        <td>90kg</td>
                      </tr>
                      <tr>
                        <td>Eco-Friendly Detergent</td>
                        <td>
                          <span className="badge bg-info">4 Stars</span>
                        </td>
                        <td>250</td>
                        <td>4.5</td>
                        <td>120kg</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Real-Time Activity</h5>
                <div className="list-group list-group-flush">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="list-group-item">
                      <div className="d-flex w-100 justify-content-between">
                        <h6 className="mb-1">{activity.action}</h6>
                        <small className="text-muted">{activity.time}</small>
                      </div>
                      <small className="text-muted">
                        Rating: {'★'.repeat(activity.rating)}
                      </small>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Actionable Insights</h5>
                <ul className="list-group list-group-flush">
                  {actionableInsights.map((insight, index) => (
                    <li key={index} className="list-group-item">
                      <i className="bi bi-lightbulb text-warning me-2"></i>
                      {insight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
