import React, { ChangeEvent, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


import { RootState } from '../type';
import { fetchAllCompanies, getSreachCompany,SortCompanies } from '../features/companiesSlice';
import { CompaniesDispatch } from '../type';
import './style.css';

function Companies() {
  const dispatch: CompaniesDispatch = useDispatch();
  const { companies, loading, error, searchForCompany } = useSelector(
    (state: RootState) => state.companies
  );

  useEffect(() => {
    dispatch(fetchAllCompanies());
  }, [dispatch]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const sreachInput=event.target.value;
    dispatch(getSreachCompany(sreachInput));
    
  };
  
  const filteredCompanies = companies.filter((company) => {
    const searchValue = searchForCompany.toString().toLowerCase();
    //i cast the value beacuse inut is tring value , id:number
    return company.id === Number(searchValue) || company.login.toLowerCase().includes(searchValue);
  });

    
  const handleSort =(event:ChangeEvent<HTMLSelectElement>)=>{
    const sortingOption=event.target.value;
       dispatch(SortCompanies(sortingOption));
  }
  if (loading) {
    return <p><span className="loader"></span></p>
}
  if (error) {
  <p className="error">Error: {error}</p>
}
    

  return (
    <div>
      <div className="header">
        <div className="logo">
          <h2>Companies App</h2>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search By id or name ..." value={searchForCompany} onChange={handleSearch} />
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
          <div className="company-list">
            {filteredCompanies.map((company) => (
              <section key={company.id} className="company">
                <img src={company.avatar_url} alt={company.login} />
                <p>Compnay ID:{company.id}</p>
                <p>Company Name :{company.login}. </p>
                <p>Description :{company.description}</p>
                <Link className='text' to={`/Companies/${company.id}`}>Show Details</Link>
              </section>
            ))}
          </div>
      </div>
    </div>
  );
}

export default Companies;
