import { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.header-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      // Smooth scroll with easing
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 600; // 0.6 seconds - faster and more professional
      let start = null;

      const easeInOutQuad = (t) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };

      const animation = (currentTime) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutQuad(progress);
        
        window.scrollTo(0, startPosition + distance * ease);
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
      setActiveLink(sectionId);
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
          <img src="/logo.jpg" alt="Kardeai Logo" className="logo-img" />
        </div>
        
        <div 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={`nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <a 
            onClick={() => scrollToSection('home')} 
            className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
          >
            HOME
          </a>
          <a 
            onClick={() => scrollToSection('about')} 
            className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
          >
            ABOUT US
          </a>
          <a 
            onClick={() => scrollToSection('offer')} 
            className={`nav-link ${activeLink === 'offer' ? 'active' : ''}`}
          >
            WHAT WE OFFER
          </a>
          <a 
            onClick={() => scrollToSection('services')} 
            className={`nav-link ${activeLink === 'services' ? 'active' : ''}`}
          >
            OUR SERVICES
          </a>
          <a 
            onClick={() => scrollToSection('projects')} 
            className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
          >
            OUR PROJECTS
          </a>
          <a 
            onClick={() => scrollToSection('investment')} 
            className={`nav-link ${activeLink === 'investment' ? 'active' : ''}`}
          >
            WHY R.E. INVESTMENT
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
