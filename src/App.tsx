import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Companies from './Components/Companies';
import SingleCompany from'./Components/SingleCompanyPage'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>} />
        <Route path='/companies' element={<Companies/>}/>
        <Route path='/companies:id' element={<SingleCompany/>}/>

      </Routes>
      </BrowserRouter>
      <div>
      </div>
    </div>
      

  );
}

export default App;
