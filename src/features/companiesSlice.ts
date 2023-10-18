import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {CompaniesState} from '../type'

const initialState :CompaniesState ={
  data: [],
  loading: false,
  error: null ,
  searchForCompany :'',
  SingleCompany:null
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
  }});

const companiesReducer = createSlice({
  name: 'companies',
  initialState:initialState,
  reducers: {
    searchCompany:(state ,action)=>{
      state.searchForCompany=action.payload;
    },
    SortCompanies:(state ,action)=>{
      const SortingInput =action.payload;
      if(SortingInput === 'login'){
        state.data.sort((a,b)=>a.login.localeCompare(b.login) )
      }
      else if(SortingInput === 'id'){
        state.data.sort((a,b)=>a.id -b.id )

      }

    }

  },
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
        state.error = action.error.message || "ERR ";
      })
  },
});

export const {searchCompany,SortCompanies} =companiesReducer.actions
export default companiesReducer.reducer;
