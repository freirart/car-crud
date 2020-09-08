import React from 'react';
import { Link } from 'react-router-dom';

import CarItem from '../../components/CarItem';

import './styles.css';

function CarList() {
  
  const cars = JSON.parse(localStorage.getItem('cars'));
  
  return (
    <div id="car-list-page">
      <div id="car-list-page-content" className="container">
        <header>
          <Link to="/">Voltar à home</Link>
          <h2>Carros cadastrados</h2>
        </header>
        <main>
          {
            cars.map((car, index) => <CarItem key={index} obj={car} />)
          }
        </main>
      </div>
    </div>
  );
}

export default CarList;