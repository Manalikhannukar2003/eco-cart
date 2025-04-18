import React from "react";


function AdminDashboard() {
  return (
    <div className="bg-success bg-opacity-25 py-3"
    style={{height: "500px" }}
        
    >
    <div className="container mt-5">
      <h1 className="mb-4 text-center">
      <i className="bi bi-person-circle" style={{ fontSize: "3rem", color: "#007bff" }}></i>
      <br />
      Welcome to Your Dashboard</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Analytics</h5>
              <p className="card-text">Track your website performance here.</p>
              <a href="/" className="btn btn-primary">
                View Analytics
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Tasks</h5>
              <p className="card-text">Manage your tasks efficiently.</p>
              <a href="/" className="btn btn-primary">
                Go to Tasks
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Settings</h5>
              <p className="card-text">Adjust your preferences here.</p>
              <a href="/" className="btn btn-primary">
                Open Settings
              </a>
              
            </div>
            
          </div>
        </div>
      </div>
    
    </div>
    
    </div>
  );
}

export default AdminDashboard;