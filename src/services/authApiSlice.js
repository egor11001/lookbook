import { apiSlice } from './apiSlice';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ phone }) => ({
        url: '/auth',
        method: 'POST',
        body: { phone },
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
