import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async action to fetch product data from the API
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://6458b0fd8badff578ef7ea9b.mockapi.io/data_store');
  const data = await response.json();
  return data;
});

// Async action to add a product to the API
export const addProductToApi = createAsyncThunk('products/addProductToApi', async (newProduct) => {
  const response = await fetch('https://6458b0fd8badff578ef7ea9b.mockapi.io/data_store', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newProduct),
  });
  const data = await response.json();
  return data;
});

const productSlice = createSlice({
  name: 'products',
  initialState: { data: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addProductToApi.fulfilled, (state, action) => {
        // Add the new product to the local Redux state after a successful API response
        state.data.push(action.payload);
      })
      .addCase(addProductToApi.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
