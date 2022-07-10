import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setUser, logOut } from '../redux/slices/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: '',
  credentials: true,
  prepareHeaders: (headers, { getState }) => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.originalStatus === 403) {
    console.log('sending refresh token');
    const refreshResult = await baseQuery('/refresh', api, extraOptions);
    console.log(refreshResult);
    if (refreshResult?.data) {
      localStorage.setItem('UToken', refreshResult.token);
      const user = api.getState().UAuth.user;
      api.dispatch(setUser({ ...refreshResult, user }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      localStorage.removeItem('UToken');
      api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
