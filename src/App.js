// Movies.js
import React, { useState, useEffect } from 'react';
import  Movies  from './Components/Movies';
import HeroSection from './Components/HeroSection';
import BodySection from './Components/BodySection';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <div className="header">
        <HeroSection start={11} end={12}/>
      </div>
      <div className="body">
        <BodySection />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default App;
