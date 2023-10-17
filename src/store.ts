import { configureStore } from '@reduxjs/toolkit';
import companiesSlice from './features/companiesSlice';

const store = configureStore({
  reducer: {
    companies: companiesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;