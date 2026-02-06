import { useState } from 'react';
import '../styles/OurProjects.css';

const OurProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Project data - Real projects from FAIRDEAL GROUP
  const projects = [
    {
      id: 1,
      image: `${import.meta.env.BASE_URL}Project_1.png`,
      title: 'MICRO WINDMILL',
      subtitle: 'Mandavi Village',
      description: 'Installed for 4 Acre Farm House Bungalow in Mandavi Village Near Khadakwasala',
    //  details: 'This project marked our entry into renewable energy sector with innovative micro windmill technology designed for rural applications.',
     // capacity: 'Micro Scale',
      location: 'Mandavi Village Near Khadakwasala',
      year: 'Working Since 2010'
    },
    {
      id: 2,
      image: `${import.meta.env.BASE_URL}Project_2.png`,
      title: 'SOLAR + WIND HYBRID SYSTEM',
      subtitle: 'Govitri Village, Kamshet',
      description: 'Installed for 4 Acre Farm House USED  AS MAIN SOURCE OF ELECTRICAL POWERFor 3HP Water pump and General Electrical Load  At Govitri Village, Kamshet.',
     // details: 'Commercial solar installation with grid integration, designed to reduce operational costs and carbon footprint.',
     // capacity: '50 kW',
      location: 'Govitri Village, Kamshet ',
      year: 'Working Since 2011'
    },
    {
      id: 3,
      image: `${import.meta.env.BASE_URL}Project_3.png`,
      title: 'SOLAR + WIND HYBRID SYSTEM',
      subtitle: 'Warje',
      description: 'Installed for 200 Nos. Of Common Lights and Water PumpInstallation done on 12 story Residential Tower at Warje.',
      //details: 'Major solar power installation providing substantial renewable energy for captive consumption.',
      //capacity: '1 MW',
      location: 'Wajre',
      year: 'Working Since 2014'
    },
    {
      id: 4,
      image: `${import.meta.env.BASE_URL}Project_4.png`,
      title: '50 kw SOLAR GRID TIE SYSTEM',
      subtitle: 'Bhuleshwar',
      description: 'Approx. 5000 Sq. Ft. Area used as Solar parking.Installation done for PRAVIN / SUHANA MASALE warehouse at Bhuleshwar',
      //details: 'Large-scale solar power plant with Power Purchase Agreement for commercial energy distribution.',
      location: 'Bhuleshwar',
      year: 'Working Since 2016'
    },
    {
      id: 5,
      image: `${import.meta.env.BASE_URL}Project_5.png`,
      title: '1 MW SOLAR POWER PLANT',
      subtitle: 'Solapur',
      description: '1 MW SOLAR POWER PLANT for Captive Use Installed at Solapur',
      //details: 'Rooftop solar installation optimizing industrial building space for clean energy generation.',
      //capacity: 'Industrial Scale',
      location: 'Solapur',
      year: 'Recent'
    },
        {
      id: 6,
      image: `${import.meta.env.BASE_URL}Project_6.png`,
      title: '1.25 MW SOLAR POWER PLANT',
      subtitle: 'Sangola',
      description: '1.25 MW SOLAR POWER PLANT with PPA for Commercial Use Installed at Sangola',
      //details: 'Rooftop solar installation optimizing industrial building space for clean energy generation.',
      //capacity: 'Industrial Scale',
      location: 'Sangola',
      year: 'Recent'
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="our-projects-section" id="projects">
      <div className="our-projects-container">
        <div className="projects-header">
          <img src={`${import.meta.env.BASE_URL}leave.png`} alt="Leaf" className="projects-leaf-icon" />
          <h2 className="projects-heading">Our Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => openModal(project)}
            >
              <div className="project-image-wrapper">
                <img 
                  src={project.image} 
                  alt={project.title}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%2387CEEB" width="400" height="300"/%3E%3Crect fill="%23228B22" y="200" width="400" height="100"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%23fff"%3ESolar Panel Project%3C/text%3E%3C/svg%3E';
                  }}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-info">
                    <p className="project-title">{project.title}</p>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            
            <div className="modal-body">
              <div className="modal-image">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%2387CEEB" width="600" height="400"/%3E%3Crect fill="%23228B22" y="300" width="600" height="100"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%23fff"%3ESolar Panel Project%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              
              <div className="modal-info">
                <h3 className="modal-title">{selectedProject.title}</h3>
                <p className="modal-description">{selectedProject.description}</p>
                <p className="modal-details">{selectedProject.details}</p>
                
                <div className="modal-specs">
                  <div className="spec-item">
                    <span className="spec-label"></span>
                    <span className="spec-value">{selectedProject.capacity}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Location:</span>
                    <span className="spec-value">{selectedProject.location}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Year:</span>
                    <span className="spec-value">{selectedProject.year}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default OurProjects;
