import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import {CompanyDispatch} from '../type'
import {SingleCompanyRootState} from '../type'
import { fetchCompanyById  } from '../features/SingleCompanySlice';
import './style.css'


function SingleCompanyPage() {
  const {id}=useParams();
  const dispatch : CompanyDispatch= useDispatch();
  const { SingleCompany, loading, error } = useSelector(
    (state: SingleCompanyRootState) => state.company
  );

  useEffect(() => {
    dispatch(fetchCompanyById(Number(id)));
  }, [dispatch,id]);

  return (
    <div>
     <div className="company-list">
      {loading ? (
        <p><span className="loader"></span></p>
      ) : error ? (
        <p className="error">Error: {error.message}</p>
      ) : (
        <div>
          {SingleCompany.map((company) => (
            <section key={company.id}>
              {company.login}
              </section>
          ))}
        </div>
      )}
    </div>
    </div>
  );
}

export default SingleCompanyPage;
