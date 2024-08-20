import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk to fetch cars
export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
  const response = await fetch('http://localhost:5000/api/cars'); // Replace with your actual API endpoint
  const data = await response.json();
  console.log('Fetched data:', data); // Log the fetched data
  return data;
});

// Initial state
const initialState = {
  cars: [],
  loading: false,
  error: null,
};

// Car slice
const carSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.cars = action.payload;
        state.loading = false;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export the reducer to be added to the store
export default carSlice.reducer;
