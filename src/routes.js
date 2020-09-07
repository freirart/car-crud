import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import CarList from './pages/CarList';
import CarRegister from './pages/CarRegister';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/car-list" component={CarList} />
      <Route path="/car-register" component={CarRegister} />
    </BrowserRouter>
  )
}

export default Routes;