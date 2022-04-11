import React from 'react';

import './Card.css';

export const Card = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setProducts(data);
      });
  }, []);

  console.log(products);

  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div className="col-md-3 mb-4">
            <div class="card" key={product.cca3}>
              <img src={product.flags.svg} class="card-img-top" alt="" />
              <div class="card-body">
                <h5 class="card-title">{product.name.official}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
