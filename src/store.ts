import { configureStore } from '@reduxjs/toolkit';
import companiesSlice from './features/companiesSlice';
import SingleCompaniesSlice from './features/SingleCompaniesSlice'

const store = configureStore({
  reducer: {
    companies: companiesSlice,
    company:SingleCompaniesSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;