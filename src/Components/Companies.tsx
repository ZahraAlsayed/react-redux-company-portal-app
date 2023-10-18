import React, { ChangeEvent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import { RootState } from '../type';
import { fetchAllCompanies, searchCompany,SortCompanies } from '../features/companiesSlice';
import { CompaniesDispatch } from '../type';
import './style.css';

function Companies() {
  const dispatch: CompaniesDispatch = useDispatch();
  const { data: companies, loading, error, searchForCompany } = useSelector(
    (state: RootState) => state.companies
  );

  useEffect(() => {
    dispatch(fetchAllCompanies());
  }, [dispatch]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const srechInput=event.target.value;
    dispatch(searchCompany(srechInput));
    //dispatch(searchCompany(Number(srechInput)))
    
  };

  const filteredCompanies = searchForCompany
    ? companies.filter((company) => company.id === searchForCompany)
    : companies;

    const filteredCompaniesByLogin = searchForCompany
    ? companies.filter((company) => company.login.toLowerCase().includes((searchForCompany.toString()).toLowerCase())) 
    : companies;
  const handleSort =(event:ChangeEvent<HTMLSelectElement>)=>{
       dispatch(SortCompanies(event.target.value));
  }
    

  return (
    <div>
      <div className="header">
        <div className="logo">
          <h1>Companies App</h1>
          <h2>hi</h2>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." value={searchForCompany} onChange={handleSearch} />
        </div>
        <div className="sort-dropdown">
          <label htmlFor="sort">Sort by:</label>
          <select id="sort" name='sort' onChange={handleSort}>
            <option value="id" defaultValue='id'>Id</option>
            <option value="login">Login</option>
          </select>
        </div>
      </div>
      <div>
        {loading ? (
          <p><span className="loader"></span></p>
        ) : error ? (
          <p className="error">Error: {error.message}</p>
        ) : (
          <div className="company-list">
            {filteredCompaniesByLogin.map((company) => (
              <section key={company.id} className="company">
                <img src={company.avatar_url} alt={company.login} />
                <p>{company.id}</p>
                <p>{company.login}</p>
                <p>{company.description}</p>
                <Link to={`/Companies/${company.id}`}><button>Show Details</button></Link>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Companies;
