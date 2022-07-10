import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authSlice from './slices/authSlice';

const rootReducer = combineReducers({ UAuth: authSlice });

export const store = configureStore({
  reducer: rootReducer,
});

/* concat(postApi.middleware, authApi.middleware, poolsApi.middleware) */
