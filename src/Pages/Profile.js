import React, { useState } from "react";

function Profile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Add your login logic here
    alert("Logged in successfully!");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
      <h1>Login to Your Profile</h1>
      <form onSubmit={handleLogin} style={{ marginTop: "20px" }}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "10px 15px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
      <div style={{ marginTop: "20px" }}>
        <p>
          Don't have an account?{" "}
          <a href="/signup" style={{ color: "#007bff", textDecoration: "none" }}>
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Profile;
