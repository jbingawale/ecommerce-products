import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productSlice = createApi({
  reducerPath: 'product', 
  
  // Define a base URL for all requests
  baseQuery: fetchBaseQuery({ 
    baseUrl: ''
  }),
  
  endpoints: (builder) => ({
    // Query endpoint: Automatically generates the 'useGetPostsQuery' hook
    getProducts: builder.query({
      query: () => `/products`,
      providesTags: (result) => 
        // Provide the 'Product' tag to the whole list
        [{ type: 'Product', id: 'LIST' }],
    }),

    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: '/products',
        method: 'POST',
        body: newProduct,
      }),
      // 👈 MOST IMPORTANT PART: Invalidate the 'LIST' tag after a successful POST
      invalidatesTags: [{ type: 'Product', id: 'LIST' }],
    }),
  }),
});

// Export the auto-generated hooks for use in components
export const { useGetProductsQuery, useAddProductMutation } = productSlice;