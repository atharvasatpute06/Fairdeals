import { useState } from 'react';
import '../styles/WhatWeOffer.css';

const WhatWeOffer = () => {
  const [expandedCards, setExpandedCards] = useState({});
  const services = [
    {
      number: '01.',
      title: 'Liasoning Consultancy',
      description: 'Getting all the needful Permissions & Certifications for installation of solar power park / plants. We are engaged with the services like Grid Connectivity from Local DCL / TCL, Project Registration at MNRE Nodal Agencies, Long / Mid / Short Term Open Access Agreement related Work (OAA), PPA, Commissioning Certification, Land Related Documentation, Statutory Approvals & Documentation Form Respective Authorities Etc.'
    },
    {
      number: '02.',
      title: 'Renewable Energy Investments & Finance',
      description: 'Having various options for Banking & Non Banking Finance for Solar projects, Now you have to just pay 25% as down payment of the solar project cost & you can avail up to 75% finance from the most reputed banks & get your monthly E.M.I. Amount almost equivalent to your light bills of your residential, industrial & commercial properties. Avail the loan repayment period of 3/5/7 years. (*T & c apply).'
    },
    {
      number: '03.',
      title: 'Project Management Consultancy (PMC)',
      description: 'P.M.C. (Project Management Consultancy) Of Solar Power Projects / Park. We do Project Feasibility Studies, Design Development & Coordination, Estimate & Costing, Tendering & Contract Management, Project Supervision, Bill Checking & Certifications, Project Cost Control, Planning & Schedule Management, Report & Documentation Hand Overing.'
    },
    {
      number: '04.',
      title: 'Engineering, Procurement & Commissioning (EPC)',
      description: 'E.P.C. (Engineering Procurement & Commissioning) Of Solar Power Plant / Park. A complete one stop solution for your solar power needs.'
    },
    {
      number: '05.',
      title: 'Installation & Commissioning (I&C)',
      description: 'I. & C. (Installation & Commissioning) Of Solar Power Plant/ Park by well experience professionals at most competitive rates.'
    },
    {
      number: '06.',
      title: 'Power Purchase Agreements (PPA)',
      description: 'Is your business / company / organization / industry is in maharashtra & consume a lot of electric power? If yes, switch to solar power & save upto 50% on monthly power bills.*'
    }
  ];

  const toggleDescription = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <section className="what-we-offer-section" id="offer">
      <div className="what-we-offer-container">
        <div className="offer-header">
          <img src="/leave.png" alt="Leaf" className="offer-leaf-icon" />
          <h2 className="offer-heading">What we offer</h2>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-number">{service.number}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">
                {expandedCards[index] 
                  ? service.description 
                  : truncateText(service.description)}
              </p>
              {service.description.length > 150 && (
                <button 
                  className="show-more-btn"
                  onClick={() => toggleDescription(index)}
                >
                  {expandedCards[index] ? 'Show Less' : 'Show More'}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
