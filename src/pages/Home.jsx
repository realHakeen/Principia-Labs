import React from 'react';
import HeroSection from '../components/HeroSection';
import MissionSection from '../components/MissionSection';
import ServicesSection from '../components/ServicesSection';
import ResearchLogs from '../components/ResearchLogs';

const Home = () => {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <ServicesSection />
      {/* Show only first 3 items on Home, button links to /research */}
      <ResearchLogs limit={3} />
    </>
  );
};

export default Home;

