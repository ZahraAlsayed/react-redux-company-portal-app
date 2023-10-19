import { ThunkDispatch } from '@reduxjs/toolkit';

import store from './store'
import companiesSlice ,{fetchAllCompanies, fetchCompanyById} from './features/companiesSlice';



export type Company = {
    id: number;
    login: string;
    node_id: String;
    url: string;
    repos_url: string;
    events_url: string;
    hooks_url: string;
    issues_url: string;
    members_url: string;
    public_members_url: string;
    avatar_url: string;
    description: string;
  };
  
  export type CompaniesState = {
    companies: Company[];
    loading: boolean;
    error: null|string ;
    searchForCompany: string |number ;
    singleCompany:Company|null
  };

export type RootState = ReturnType<typeof store.getState>


   type FetchCompaniesPengingAction = ReturnType<typeof fetchAllCompanies.pending>;
   type FetchCompaniesFulfilledAction = ReturnType<typeof fetchAllCompanies.fulfilled>;
   type FetchCompaniesRejectedAction = ReturnType<typeof fetchAllCompanies.rejected>;
   type searchConpanyAction ={
    type :'companies/getSreachCompany';
    payload: number
   }
   type sortConpanyAction ={
    type :'companies/SortCompanies';
    payload: string
   }
   type FetchCompanyPengingAction = ReturnType<typeof fetchCompanyById.pending>;
   type FetchCompanyFulfilledAction = ReturnType<typeof fetchCompanyById.fulfilled>;
   type FetchCompanyRejectedAction = ReturnType<typeof fetchCompanyById.rejected>;

   export type CompaniesActions =
   |FetchCompaniesPengingAction
   |FetchCompaniesFulfilledAction
   |FetchCompaniesRejectedAction
   |searchConpanyAction
   |sortConpanyAction
   |FetchCompanyPengingAction
   |FetchCompanyFulfilledAction
   |FetchCompanyRejectedAction;

   export type CompaniesDispatch = ThunkDispatch<RootState ,void , CompaniesActions>;

  