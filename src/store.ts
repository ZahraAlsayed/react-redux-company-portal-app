import { configureStore } from '@reduxjs/toolkit';

import companiesSlice from './features/companiesSlice';
import SingleCompaniesSlice from './features/SingleCompanySlice'



const store = configureStore({
  reducer: {
    companies: companiesSlice,
    company:SingleCompaniesSlice
  },
});



export default store;