import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type Company= {
  id: number;
  login: string;
}

export type CompaniesState ={
  data: Company[];
  loading: boolean;
  error: null;
}

export const fetchAllCompanies = createAsyncThunk(
  'companies/fetchAllCompanies',
  async () => {
    const response = await fetch('https://api.github.com/organizations'); 
    const data= await response.json();
    return data;
  }
);

const companiesReducer = createSlice({
  name: 'companies',
  initialState: { data: [], loading: false, error: null } as CompaniesState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCompanies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchAllCompanies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default companiesReducer.reducer;
//export const { } = companiesReducere.actions;
