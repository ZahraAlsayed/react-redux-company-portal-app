import { configureStore } from '@reduxjs/toolkit';

import companiesSlice from './features/companiesSlice';




const store = configureStore({
  reducer: {
    companies: companiesSlice,
  
  },
});



export default store;