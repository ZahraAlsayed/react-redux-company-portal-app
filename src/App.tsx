import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Companies from './Components/Companies';
import SingleCompant from'./Components/SingleCompant'

function App() {
  return (
    <div>
      <div>
        <Companies/>
      </div>
      <div>
        <SingleCompant/>
      </div>

    </div>
      

  );
}

export default App;
