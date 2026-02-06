import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ClientCarousel from '../components/ClientCarousel';
import AboutUs from '../components/AboutUs';
import WhatWeOffer from '../components/WhatWeOffer';
import GetStarted from '../components/GetStarted';
import OurServices from '../components/OurServices';
import OurProjects from '../components/OurProjects';
import WhyInvestment from '../components/WhyInvestment';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <ClientCarousel />
      <AboutUs />
      <WhatWeOffer />
      <GetStarted />
      <OurServices />
      <OurProjects />
      <WhyInvestment />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
