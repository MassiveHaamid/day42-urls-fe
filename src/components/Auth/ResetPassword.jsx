import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [resetPasswordSuccess, setResetPasswordSuccess] = useState('');
const {token}=useParams()

    const handleResetPassword = async () => {
        try {
            await axios.post(`https://urls-bae.onrender.com/api/auth/reset-password/${token}`, { password:newPassword });
            setResetPasswordSuccess('Password reset successful!');
            // Clear the success message after a certain duration if needed
            setTimeout(() => setResetPasswordSuccess(''), 5000);
        } catch (error) {
            console.error('Error in reset password:', error);
        }
    };

    return (
        <div>
            <h3>Reset Password</h3>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={handleResetPassword}>Submit Reset Password</button>
            {resetPasswordSuccess && <p style={{ color: 'green' }}>{resetPasswordSuccess}</p>}
        </div>
    );
};

export default ResetPassword;