import React from 'react';
import '../styles/WhyInvestment.css';

const WhyInvestment = () => {
  const benefits = [
    'India: 5th largest power generator',
    '10-Year Tax Holiday on solar income',
    'Accelerated Depreciation (60% Year 1)',
    'Subsidies & concessional financing',
    '100% FDI allowed in Solar PV'
  ];

  return (
    <section className="why-investment-section" id="investment">
      <div className="why-investment-container">
        {/* Left Side - Heading and Image */}
        <div className="investment-left">
          <h2 className="investment-heading">Why R.E. Investment</h2>
          <img src={`${import.meta.env.BASE_URL}aa.png`} alt="Green Investment" className="investment-image" />
        </div>

        {/* Right Side - Benefits List */}
        <div className="investment-right">
          <ul className="benefits-list">
            {benefits.map((benefit, index) => (
              <li key={index} className="benefit-item">
                <img src={`${import.meta.env.BASE_URL}leave.png`} alt="Leaf" className="benefit-icon" />
                <span className="benefit-text">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyInvestment;
