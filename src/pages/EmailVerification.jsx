import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmailVerification.css';

const EmailVerification = () => {
    const navigate = useNavigate();

    const handleVerificationComplete = () => {
        navigate('/');
    };

    return (
        <div className='email-verification-container'>
            <h2>Email Verification</h2>
            <p>A verification link has been sent to your email. Please check your email.</p>
            <button onClick={handleVerificationComplete} className='verify-button'>
                I have verified my email.
            </button>

        </div>
    );

};

export default EmailVerification;