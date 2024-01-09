import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.jsx';
import Dashboard from './Dashboard/Dashboard';
import URLShortener from './Dashboard/URLShortener';
import URLTable from './Dashboard/URLTable';
import URLCount from './Dashboard/URLCount';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgotPassword from './components/Auth/ForgotPassword';
import ResetPassword from './components/Auth/ResetPassword.jsx';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const logout = () => {
    setToken('');
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <AuthProvider>
        <div>
          <nav>
            <ul>
              {token ? (
                <>
                  <li>
                    <Link to="/">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/url-shortener">URL Shortener</Link>
                  </li>
                  <li>
                    <Link to="/url-list">URL List</Link>
                  </li>
                  <li>
                    <Link to="/url-count">URL Count</Link>
                  </li>
                  <li>
                    <button className="logout-button" onClick={logout}>Logout</button>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/forgot-password">Forgot Password</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route
              path="/"
              element={token ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route path="/login" element={<Login onLogin={(email, password) => Login(email, password)} />} />
            <Route path="/url-shortener" element={<URLShortener />} />
            <Route path="/url-list" element={<URLTable />} />
            <Route path="/url-count" element={<URLCount />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
