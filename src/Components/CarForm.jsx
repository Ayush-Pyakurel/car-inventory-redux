import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { changeCost, changeName, addCar } from '../store/index';

const CarForm = () => {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => {
    return {
      name: state.forms.name,
      cost: state.forms.cost,
    };
  });

  const handleNameChange = (e) => {
    e.preventDefault();
    dispatch(changeName(e.target.value));
  };

  const handleCostChange = (e) => {
    e.preventDefault();
    const carCost = parseInt(e.target.value) || 0;
    dispatch(changeCost(carCost));
  };

  const handelFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <div className='car-form panel'>
      <h4 className='subtitle is-3'>Add Car</h4>
      <form onSubmit={handelFormSubmit}>
        <div className='field-group'>
          <div className='field'>
            <label className='label'>Name</label>
            <input
              type='text'
              className='input is-expanded'
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className='field'>
            <label className='label'>Cost</label>
            <input
              type='number'
              className='input is-expanded'
              value={cost || ''}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className='field'>
          <button className='button is-link'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
