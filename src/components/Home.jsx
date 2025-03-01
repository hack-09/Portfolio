import React from 'react';
import HomeFirstSec from './HomeFirstSec';
import HomeSecondSec from './HomeSecondSec';
import ProjectSec from './ProjectSec';
import ContactSec from './ContactSec';

function Home() {
  return (
    <div>
      <HomeFirstSec />
      <HomeSecondSec />
      <ProjectSec />
      <ContactSec />
    </div>
  );
}

export default Home;