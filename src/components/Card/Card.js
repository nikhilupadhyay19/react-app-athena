import React from 'react';

export const Card = () => {
  React.useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }, []);
  return (
    <div className="card">
      <p>Card Component</p>
    </div>
  );
};
