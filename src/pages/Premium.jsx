import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Premium.css';
import Navbar from '../Navbar';

const Premium = () => {
  const navigate = useNavigate();

  const handleHomepageClick = () => {
    navigate('/home');
  };

  const handleUpgradeClick = (plan) => {
    alert(`Thank you for choosing the ${plan} plan!`);
  };

  return (
    <div className="premium-page">
      <div className="premium-container">
        <Navbar />
        <header className="premium-header">
          {/* Header content (if any) */}
        </header>

        <main className="premium-content">
          <div className="premium-heading">
            <h1>START</h1>
            <h1>YOUR</h1>
            <h1>GREATNESS</h1>
            <h1>WITH</h1>
            <h1>XCELERATE</h1>
          </div>

          <section className="about-section">
            <h2>WHAT IS XCELERATE?</h2>
            <p>
              Xcelerate is your ultimate gateway to global tournaments, seamless athlete registration, and powerful tools for organizers. Whether you're here to compete, connect, or create, we're here to help you Xcelerate your game.
            </p>
          </section>

          <section className="pricing-section">
            <h2>PREMIUM PRICING</h2>
            <div className="pricing-plans">
              <div className="plan">
                <h3>1 MONTH</h3>
                <p>$1</p>
                <button onClick={() => handleUpgradeClick('1 Month')}>Subscribe</button>
              </div>
              <div className="plan">
                <h3>6 MONTHS</h3>
                <p>$5</p>
                <button onClick={() => handleUpgradeClick('6 Months')}>Subscribe</button>
              </div>
              <div className="plan">
                <h3>1 YEAR</h3>
                <p>$10</p>
                <button onClick={() => handleUpgradeClick('1 Year')}>Subscribe</button>
              </div>
            </div>
          </section>

          <section className="new-section">
            <h2>What's NEW?</h2>
            <p>Free trial will be up to 60 days</p>
          </section>
        </main>

        <footer className="premium-footer">
          <p>© 2023 Xcelerate. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Premium;