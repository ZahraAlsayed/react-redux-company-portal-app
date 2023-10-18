import { ThunkDispatch } from '@reduxjs/toolkit';

import store from './store'
import companiesSlice ,{fetchAllCompanies} from './features/companiesSlice';
import SingleCompanySlice ,{fetchCompanyById} from './features/SingleCompanySlice';


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
    data: Company[];
    loading: boolean;
    error: null|string ;
    searchForCompany: number|String;
    SingleCompany:Company |null
  };

  export type RootState = {
    companies:ReturnType<typeof companiesSlice>;
};
export type SingleCompanyRootState = {
    company:ReturnType<typeof companiesSlice>;
};
  
  //export type AppDispatch = typeof store.dispatch

   type FetchCompaniesPengingAction = ReturnType<typeof fetchAllCompanies.pending>;
   type FetchCompaniesFulfilledAction = ReturnType<typeof fetchAllCompanies.fulfilled>;
   type FetchCompaniesRejectedAction = ReturnType<typeof fetchAllCompanies.rejected>;
   type searchConpanyAction ={
    type :'companies/searchCompany';
    payload: number
   }
   type sortConpanyAction ={
    type :'companies/SortCompanies';
    payload: string
   }

   export type CompaniesActions =
   FetchCompaniesPengingAction
   |FetchCompaniesFulfilledAction
   |FetchCompaniesRejectedAction
   |searchConpanyAction
   |sortConpanyAction;

   export type CompaniesDispatch = ThunkDispatch<RootState ,void , CompaniesActions>;

   
   type FetchCompanyPengingAction = ReturnType<typeof fetchCompanyById.pending>;
   type FetchCompanyFulfilledAction = ReturnType<typeof fetchCompanyById.fulfilled>;
   type FetchCompanyRejectedAction = ReturnType<typeof fetchCompanyById.rejected>;

   export type CompanyActions =
   FetchCompanyPengingAction
   |FetchCompanyFulfilledAction
   |FetchCompanyRejectedAction;

   export type CompanyDispatch = ThunkDispatch<RootState ,void , CompaniesActions>;