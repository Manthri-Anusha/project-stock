import React, { useState } from 'react';
import axios from 'axios';
import "../styles/LandingPage.css"

function LandingPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      console.log(response.data);
      // Handle successful login (e.g., store token, redirect)
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="landing-page">
      <h1>SB Stock Trading</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default LandingPage;