import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { changeCost, changeName } from '../store/index';

const CarForm = () => {
  const dispatch = useDispatch();

  const name = useSelector((state) => {
    // console.log(state, 'state');
    return state.forms.name;
  });

  const cost = useSelector((state) => {
    console.log(state);
    return state.forms.cost;
  });

  const handleNameChange = (e) => {
    e.preventDefault();
    dispatch(changeName(e.target.value));
  };

  const handleCostChange = (e) => {
    e.preventDefault();
    dispatch(changeCost(e.target.value));
  };

  return (
    <div className='car-form panel'>
      <h4 className='subtitle is-3'>Add Car</h4>
      <form>
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
              value={cost}
              onChange={handleCostChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CarForm;
