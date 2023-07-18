import { createSlice, nanoid } from '@reduxjs/toolkit';

const carSlice = createSlice({
  name: 'car',
  initialState: {
    searchTerm: '',
    cars: [],
    reducers: {
      changeSearchTerm(state, action) {
        state.searchTerm = action.payload;
      },
      addCars(state, action) {
        // state -> {name: '', id: '', cost: ''}
        state.cars.push({
          name: action.payload.name,
          cost: action.payload.cost,
          id: nanoid,
        });
      },
      removeCar(state, action) {
        const removedCar = state.cars.filter((car) => {
          return car.id !== action.payload;
        });
        state.cars.push(removedCar);
      },
    },
  },
});

export const { changeSearchTerm, addCars, removeCar } = carSlice.actions;
export const carsReducer = carSlice.reducer;
