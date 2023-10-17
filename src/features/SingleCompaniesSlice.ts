import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export type Company = {
  id: number;
  login: string;
};

export type CompaniesState = {
  data: Company[];
  loading: boolean;
  error: null ;
};
export const fetchCompanyById = createAsyncThunk('companies/fetchCompanyById', async (id: number) => {
  const response = await fetch(`https://api.github.com/organizations/${id}`);
  const data = await response.json();
  return data;
});

const SingleCompaniesReducer = createSlice({
  name: 'companies',
  initialState: { data: [], loading: false, error: null } as CompaniesState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanyById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCompanyById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = [action.payload]; // Update the state with the single company
      })
      .addCase(fetchCompanyById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default SingleCompaniesReducer.reducer;
