import React from 'react';
import './ProductPage.css';

import TopBar from '../../components/TopBar/TopBar.js';
import NavBar from '../../components/NavBar/NavBar.js';
import Footer from '../../components/Footer/Footer.js';

import { Card } from '../../components/Card/Card.js';

const ProductPage = () => {
  return (
    <div className="productpage">
      <TopBar />
      <NavBar />
      <div className="container">
        <Card />
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
