import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [forgetPasswordSuccess, setForgetPasswordSuccess] = useState('');

  const handleForgotPassword = async () => {
    try {
      // Basic email validation
      if (!email) {
        setErrorMessage('Please enter your email address.');
        return;
      }
      await axios.post('https://urls-bae.onrender.com/api/auth/forget-password', { email });
      setForgetPasswordSuccess('Forget password request successful!');
      setTimeout(() => setForgetPasswordSuccess(''), 5000);
    } catch (error) {
      console.error('Error in forget password:', error);
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleForgotPassword}>Forgot Password</button>
        {forgetPasswordSuccess && <p style={{ color: 'green' }}>{forgetPasswordSuccess}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;
