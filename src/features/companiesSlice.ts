import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {CompaniesState} from '../type'

const initialState :CompaniesState ={
  companies: [],
  loading: false,
  error: null ,
  searchForCompany :'',
  singleCompany:null
 }

export const fetchAllCompanies = createAsyncThunk('Companies/fetchData', async () => {
  try {
    const response = await fetch('https://api.github.com/organizations');
    // checking there is any issue with network
    if (!response.ok) {
      throw new Error('Network response error');
    }
    const data = await response.json();
    return data;
  } catch (error) {
//checking if there is any issue when fetch process
  console.log(error) 
  throw error;
  }});

  export const fetchCompanyById = createAsyncThunk('company/fetchCompanyById', async (id: number) => {
    try {
      const response = await fetch(`https://api.github.com/orgs/${id}`);
      if (!response.ok) {
        throw new Error('Network response error');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  });

const companiesReducer = createSlice({
  name: 'companies',
  initialState:initialState,
  reducers: {
    getSreachCompany:(state ,action)=>{
      state.searchForCompany=action.payload;
    },
    SortCompanies:(state ,action)=>{
      const SortingInput =action.payload;
      if(SortingInput === 'login'){
        state.companies.sort((a,b)=>a.login.localeCompare(b.login) )
      }
      else if(SortingInput === 'id'){
        state.companies.sort((a,b)=>a.id -b.id )
      }
    }
  },
  //companies 
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCompanies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCompanies.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.companies = action.payload;
      })
      .addCase(fetchAllCompanies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "There is something wrong ";
      })
      //single company
      .addCase(fetchCompanyById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCompanyById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.singleCompany = action.payload; // Update the state with the single company
      })
      .addCase(fetchCompanyById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "There is something wrong";
      })
  },
});

export const {getSreachCompany,SortCompanies} =companiesReducer.actions
export default companiesReducer.reducer;
