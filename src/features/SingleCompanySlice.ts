import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {CompaniesState} from '../type'

export const fetchCompanyById = createAsyncThunk('Companies/fetchData', async (id:number) => {
  try {
    const response = await fetch(`https://api.github.com/orgs/${id}`);
    // checking there is any issue with network
    if (!response.ok) {
      throw new Error('Network response error');
    }
    const data = await response.json();
    return data;
  } catch (error) {
//checking if there is any issue when fetch process
  console.log(error) 
  }});

const initialState :CompaniesState ={
  data: [], 
  loading: false, 
  error: null, 
  searchForCompany:0,
  SingleCompany:null
};

const SingleCompaniesReducer = createSlice({
  name: 'companies',
  initialState: initialState ,
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
        state.error = action.error.message || "ERR";
      });
  },
});

export default SingleCompaniesReducer.reducer;
