import '../styles/Hero.css';

const Hero = () => {
  const scrollToOffer = () => {
    const element = document.getElementById('offer');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      // Smooth scroll with easing
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 800; // 0.8 seconds
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
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">
          Renewable Energy<br />
          Solutions for a<br />
          Sustainable Tomorrow
        </h1>
        
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={scrollToOffer}>EXPLORE</button>
          <button className="btn btn-secondary">LET'S TALK</button>
        </div>
        
        <div className="hero-footer">
          <p className="certification">
            WE ARE AN <span className="highlight">ISO 9001-2015 CERTIFIED</span> COMPANY WITH<br />
            MORE THAN <span className="highlight">20 YEARS OF EXPERIENCE</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
