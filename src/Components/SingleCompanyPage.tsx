import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { CompaniesDispatch } from '../type';
import {RootState} from '../type'
import { fetchCompanyById  } from '../features/companiesSlice';
import './style.css'
import Navbar from './Navbar';


function SingleCompany() {
  const {id} =useParams();;
  const dispatch: CompaniesDispatch = useDispatch();
  const { singleCompany, loading, error } = useSelector(
    (state: RootState) => state.companies
  );

  useEffect(() => {
    if(id){
      dispatch(fetchCompanyById(Number(id)));
    } 
  }, [dispatch,id]);


  return (
    <div>
     <div >
      
      {loading ? (
        <p><span className="loader"></span></p>
      ) : error ? (
        <p className="error">Error: {error}</p>
      ) : (
        <div className=''>
          {singleCompany &&(
            <section key={singleCompany.id} className='section'>
              <h2>{singleCompany.login}</h2>
              <img src={singleCompany.avatar_url} alt={singleCompany.login} />
              <p>Company URL {singleCompany.url}</p>
              <p>Description: {singleCompany.description}</p>
              <p>Membres: {singleCompany.members_url}</p>
              </section>
          )}
        </div>
      )}
    </div>
    </div>
  );
}

export default SingleCompany;
