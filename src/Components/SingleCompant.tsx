import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCompanyById ,Company } from '../features/SingleCompaniesSlice';
import './style.css'

function SingleCompant() {
  const dispatchBuId = useDispatch();
  const { data: singleCompany, loading: singleCompanyLoading, error: singleCompanyError } = useSelector(
    (state: RootState) => state.company
  );

  useEffect(() => {
    dispatchBuId(fetchCompanyById(144));
  }, [dispatchBuId]);

  return (
    <div>
     <div className="company-list">
      <h1>Company Nmae</h1>
      {singleCompanyLoading ? (
        <p><span className="loader"></span></p>
      ) : singleCompanyError ? (
        <p className="error">Error: {singleCompanyError.message}</p>
      ) : (
        <ul>
          {singleCompany.map((company:Company) => (
            <li key={company.id}>{company.login}</li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
}

export default SingleCompant;
