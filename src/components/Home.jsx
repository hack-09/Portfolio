import React from 'react';
import HomeFirstSec from './HomeFirstSec';
import HomeSecondSec from './HomeSecondSec';
// import AboutSection from './AboutSection';
import ExperienceSection from './ExperienceSection';
import ProjectSec from './ProjectSec';
import TestimonialsSection from './TestimonialsSection';
import BlogSection from './BlogSection';
import StatsSection from './StatsSection';
import ContactSec from './ContactSec';
import Footer from './Footer';

function Home() {
  return (
    <div>
      <HomeFirstSec />
      {/* <AboutSection /> */}
      <HomeSecondSec />
      <ExperienceSection />
      {/* <StatsSection /> */}
      <ProjectSec />
      {/* <TestimonialsSection /> */}
      {/* <BlogSection /> */}
      <ContactSec />
      <Footer />
    </div>
  );
}

export default Home;