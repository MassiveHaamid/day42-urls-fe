import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    try {
      // Basic form validation
      if (!firstName || !lastName || !email || !password || password !== confirmPassword) {
        setErrorMessage('Please fill in all fields and ensure passwords match.');
        return;
      }
      await axios.post('https://urls-bae.onrender.com/api/auth/register', 
      {firstName: firstName, lastName: lastName, email: email, password: password});
      setRegistrationSuccess('Registration successful!');
      // Clear the success message after a certain duration if needed
      setTimeout(() => {
        setRegistrationSuccess('');
        // Redirect to the login page after successful registration
        navigate('/login');
      }, 5000);
  } catch (error) {
      console.error('Error in registration:', error);
  }
};
  
  return (
    <div className="container">
      <h2>Register</h2>
      <form>
        <div>
          <label>First Name:</label>&nbsp;
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>Last Name:</label>&nbsp;
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
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
        <div>
          <label>Confirm Password:</label>&nbsp;
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleRegister}>Register</button>
        {registrationSuccess && <p className="success-message">{registrationSuccess}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Register;
