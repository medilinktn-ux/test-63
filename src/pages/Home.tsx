import React from 'react';
import CarListing from '../components/CarListing';
import CarSearch from '../components/CarSearch';

function Home() {
  const cars = [
    { id: 1, name: 'Car 1' },
    { id: 2, name: 'Car 2' },
  ];

  return (
    <div>
      <CarSearch />
      <CarListing cars={cars} />
    </div>
  );
}

export default Home;