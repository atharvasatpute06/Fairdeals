import React from 'react';
import '../styles/OurServices.css';

const OurServices = () => {
  const services = [
    'Solar & Wind Power Systems',
    'Hybrid & Biogas Plants',
    'P.M.C., E.P.C., I.&C. Services',
    'R.E. Investment and Finance',
    'Power Purchase Agreements',
    'Liasoning for Permits & Clearances'
  ];

  return (
    <section className="our-services-section" id="services">
      <div className="our-services-container">
        {/* Left Side */}
        <div className="services-left">
          <img src={`${import.meta.env.BASE_URL}leave.png`} alt="Leaf" className="services-leaf-icon" />
          <h2 className="services-heading">Our Services</h2>
          <p className="services-subtitle">
            Green Power Developer |<br />
            PMC | System Integrator
          </p>
          <img src={`${import.meta.env.BASE_URL}ourservers.png`} alt="Green Power" className="services-plug-image" />
        </div>

        {/* Right Side */}
        <div className="services-right">
          <div className="services-list-box">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <span className="service-number">0{index + 1}.</span>
                <span className="service-name">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
