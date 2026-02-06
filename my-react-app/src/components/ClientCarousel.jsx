import React, { useState, useEffect, useRef } from 'react';
import '../styles/ClientCarousel.css';

const ClientCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);

  // Client logos array - replace with your actual logo paths
  const logos = [
    '/hero-bg.png',
    '/clients/logo2.png',
    '/clients/logo3.png',
    '/clients/logo4.png',
    '/clients/logo5.png',
    '/clients/logo6.png',
    '/clients/logo7.png',
    '/clients/logo8.png',
    '/clients/logo9.png',
    '/clients/logo10.png',
  ];

  // Duplicate logos for infinite scroll effect
  const duplicatedLogos = [...logos, ...logos, ...logos];

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Reset position for infinite loop
  useEffect(() => {
    if (currentIndex >= logos.length * 2) {
      setTimeout(() => {
        carouselRef.current.style.transition = 'none';
        setCurrentIndex(logos.length);
        setTimeout(() => {
          carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
        }, 50);
      }, 500);
    } else if (currentIndex <= 0) {
      setTimeout(() => {
        carouselRef.current.style.transition = 'none';
        setCurrentIndex(logos.length);
        setTimeout(() => {
          carouselRef.current.style.transition = 'transform 0.5s ease-in-out';
        }, 50);
      }, 500);
    }
  }, [currentIndex, logos.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section className="client-carousel-section">
      <div className="client-carousel-container">
        <h2 className="client-carousel-title">Our Clients</h2>

        <div className="carousel-wrapper">
          <button className="carousel-arrow carousel-arrow-left" onClick={handlePrev}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="carousel-track-container">
            <div 
              ref={carouselRef}
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / 7)}%)`,
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div key={index} className="carousel-item">
                  <div className="logo-circle">
                    <img 
                      src={logo} 
                      alt={`Client ${(index % logos.length) + 1}`}
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100"%3E%3Crect fill="%23e0e0e0" width="100" height="100"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="14" fill="%23999"%3ELogo%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-arrow carousel-arrow-right" onClick={handleNext}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <p className="carousel-footer">And many more…</p>
      </div>
    </section>
  );
};

export default ClientCarousel;
