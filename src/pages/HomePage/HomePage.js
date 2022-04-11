import React from 'react';
import TopBar from '../../components/TopBar/TopBar.js';
import NavBar from '../../components/NavBar/NavBar.js';
import Footer from '../../components/Footer/Footer.js';

const HomePage = () => {
  return (
    <div className="homepage">
      <TopBar />
      <NavBar />
      <Footer />
    </div>
  );
};

export default HomePage;
