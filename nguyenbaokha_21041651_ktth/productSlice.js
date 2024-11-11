import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define an async action to fetch product data from API
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://6458b0fd8badff578ef7ea9b.mockapi.io/data_store');
  const data = await response.json();
  return data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { state.loading = true; })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
