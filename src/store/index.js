import {
  changeSearchTerm,
  addCars,
  removeCar,
  carsReducer,
} from './slices/carsSlices';

import { changeCost, changeName, formReducer } from './slices/formSlices';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    forms: formReducer,
  },
});

export { store, changeCost, changeName, addCars, changeSearchTerm, removeCar };
