import { configureStore } from '@reduxjs/toolkit';
import carReducer from './slice/carSlice';

const store = configureStore({
  reducer: {
    car: carReducer,
  },
});

export default store;