import React from 'react';
import Car from '../types/car';

interface CarListingProps {
  cars: Car[];
}

function CarListing({ cars }: CarListingProps) {
  return (
    <div>
      {cars.map((car) => (
        <div key={car.id}>{car.name}</div>
      ))}
    </div>
  );
}

export default CarListing;