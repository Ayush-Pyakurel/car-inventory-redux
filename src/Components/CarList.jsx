import React from 'react';
import { useSelector } from 'react-redux';

const CarList = () => {
  const cars = useSelector((state) => {
    return state.cars.cars;
  });

  const carList = cars?.map((car) => {
    return (
      <div key={car.id}>
        <ul>
          <li>
            {car.name} {car.cost}
          </li>
        </ul>
      </div>
    );
  });

  return (
    <div>
      <div>{carList}</div>
    </div>
  );
};

export default CarList;
