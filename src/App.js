import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// import HomePage from './pages/HomePage/HomePage.js';
import ProductPage from './pages/ProductPage/ProductPage.js';

export default function App() {
  return (
    <div className="athena-app">
      {/* <HomePage /> */}
      <ProductPage />
    </div>
  );
}
