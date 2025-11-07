import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { productSlice } from '../services/productSlice'; 

export const store = configureStore({
  reducer: {
    [productSlice.reducerPath]: productSlice.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productSlice.middleware),
});

// Optional: Enable refetch on focus/reconnect behavior
setupListeners(store.dispatch);