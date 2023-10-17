import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllCompanies, Company } from '../features/companiesSlice';
import './style.css'
function Companies() {
  const dispatch = useDispatch();
  const { data: companies, loading, error } = useSelector(
    (state: RootState) => state.companies
  );

  useEffect(() => {
    dispatch(fetchAllCompanies());
  }, [dispatch]);

  return (
    <div>
     <div className="company-list">
      <h1>Company Nmae</h1>
      {loading ? (
        <p><span className="loader"></span></p>
      ) : error ? (
        <p className="error">Error: {error.message}</p>
      ) : (
        <ul>
          {companies.map((company:Company) => (
            <li key={company.id}>{company.login}</li>
          ))}
        </ul>
      )}
    </div>
    <div className="company-list">
      <h1>Company ID</h1>
      {loading ? (
        <p><span className="loader"></span></p>
      ) : error ? (
        <p className="loading">Error: {error.message}</p> 
      ) : (
        <ul>
          {companies.map((company: Company) => (
            <li key={company.id}>{company.id}</li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
}

export default Companies;
