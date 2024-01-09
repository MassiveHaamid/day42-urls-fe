import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState('');

  const handleLogin = async () => {
    try {
      // Make an API call to your backend for user authentication
      const response = await axios.post('https://urls-bae.onrender.com/api/auth/login', { email:email, password });
      setLoginSuccess(response.data.message);
      localStorage.setItem("token", response.data.token);
      setTimeout(() =>{window.location.href="/"}, 3000);
    } catch (error) {
      console.error('Error in login:', error);
      setLoginSuccess('Login failed');
    }
      // Assuming your backend sends a token upon successful login
      // const token = response.data.token;

      // Store the token in local storage or state for future authenticated requests
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <div>
          <label>Email:</label>&nbsp;
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>&nbsp;
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
        {loginSuccess && <p style={{ color: 'green' }}>{loginSuccess}</p>}
      </form>
    </div>
  );
};

export default Login;
