import { configureStore, combineReducers } from '@reduxjs/toolkit';

import auth from './Auth/slice';

const rootReducer = combineReducers({ auth });

export const store = configureStore({
  reducer: rootReducer,
});
