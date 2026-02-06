import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us-section" id="about">
      <div className="about-us-container">
        <div className="about-content-wrapper">
          {/* Left Side - Heading with Leaf Icon */}
          <div className="about-heading-container">
            <img src="/leave.png" alt="Leaf" className="leaf-icon" />
            <h2 className="about-heading">About Us</h2>
          </div>

          {/* Right Side - Description Text */}
          <div className="about-text-container">
            <p className="about-text">
              <strong>FAIRDEAL GROUP</strong> Established in 2005 as "Fairdeal Corporates Sales & Services" as a proprietary firm, further extended our arm in 2014 as "Fairdeal Greentech India Pvt. Ltd." & "Open Source Power Solutions Pvt. Ltd." in 2021 is one of the renowned & fastest growing manufacturers, suppliers & IPP using wide range of Renewable Energy Systems & Products.
            </p>
            <p className="about-text">
              Now as a venture between Fairdeal Group brings together all aspects of Solar Park Development with Turnkey P.M.C. (Project Management Consultant), E.P.C. Contract (Engineering, Procurement & Commissioning Contractor), Green Infrastructure Development all as required by the client under one roof.
            </p>
            <p className="about-text">
              With in-depth Technical Knowledge with Various Government policies regarding renewable energy, we provide valuable assistance to our clients for the most bankable R.E. Investments Opportunities to meet their Today's Economy with P.M.C. & E.P.C. Services which are Most Reliable, Long Life & Built with Superior Quality material sourced across the global market.
            </p>
            <p className="about-text">
              We also offer On-Grid & Off-Grid Renewable Energy Systems like Solar Rooftop Power Plant, Ground Mount Solar Power Plants, Windmill Power Plants, Hybrid Power Plants, Solar Thermal Power Plants, Solar Water Pumps & products like Large Scale Biogas Plants, Plastic to Fuel Plant & all other Green Power Generating Products.
            </p>
            <p className="about-text">
              Through our various opportunities with High Returns in R.E. Investment, Fairdeal aims to become a thought leader in the Domain of Renewable Energy Investment (R.E. Invest) & Solar E.P.C. contracts across the global market. Which can further lead to our customers to high financial gain by reducing harmful Green House Gas Emissions (G.H.G.) & solving the energy crisis situation that we are facing today.
            </p>
            <p className="about-text">
              Understanding the complexity of global warming, our professionals adroit in offering products which can prove to be helpful in reducing harmful greenhouse gas (GHG) emissions. Moreover, all our products are also Cost Efficient, Eco Friendly & are reducing the requirement of traditional source of power generation Sources like Nuclear, Hydro, Thermal, Diesel, Petrol & others.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
