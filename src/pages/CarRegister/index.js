import React from 'react';
import { useState } from 'react';

import defaultImage from '../../assets/images/default-image.png';

import './styles.css';
import { Link, useHistory } from 'react-router-dom';

function CarRegister() {

  const cars = JSON.parse(localStorage.getItem('cars')) || [];

  const history = useHistory();

  const [imgSource, setImageSource] = useState('');
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [year, setYear] = useState('');
  const [plate, setPlate] = useState('');
  const [color, setColor] = useState('#fbc968');

  function handlePlacaChange(e) {
    if (e.target.value.length === 3) 
      e.target.value += '-';
    if (e.target.value.length >= 7)
      setPlate(e.target.value);
  }

  function handleYearChange(e) {
    const y = e.target.value.split('-')[0];
    setYear(y);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const car = { imgSource, model, brand, year, plate, color };
    cars.push(car);
    localStorage.setItem('cars', JSON.stringify(cars));
    
    const $messageDiv = document.querySelector(".message.hidden");
    $messageDiv.classList.remove('hidden');
    setTimeout(() => {
      $messageDiv.classList.add('hidden');
      history.replace('/');
    }, 2000); 
  }

  return (
    <div id="car-register-page">
      <div id="car-register-page-content" className="container">
        <section className="img-section">
          <img src={imgSource || defaultImage} alt="Car"/>
        </section>
        <section className="form-section">
          <form onSubmit={handleSubmit}>
            <h1>Cadastrar um novo veículo</h1>

            <div className="input-block">
              <label htmlFor="url">Entre o link da foto do seu veículo</label>
              <input 
                id="url" 
                type="text" 
                onChange={e => setImageSource(e.target.value)}
                required
              />
            </div>

            <div className="input-block">
              <label htmlFor="modelo">Modelo</label>
              <input id="modelo" onChange={e => setModel(e.target.value)} type="text" required/>
            </div>

            <div className="input-group">
              <div className="input-block w50">
                <label htmlFor="marca">Marca</label>
                <input id="marca" onChange={e => setBrand(e.target.value)} type="text" required/>
              </div>

              <div className="input-block w50">
                <label htmlFor="ano">Ano</label>
                <input id="ano" type="month" onChange={handleYearChange} required/>
              </div>
            </div>

            <div className="input-group">
              <div className="input-block w50">
                <label htmlFor="placa">Placa</label>
                <input 
                  id="placa" 
                  type="text" 
                  onKeyUp={handlePlacaChange} 
                  placeholder="XXX-XXXX"
                  required
                  minLength="8"
                  maxLength="8"
                />
              </div>

              <div className="input-block w50">
                <label htmlFor="cor">Cor</label>
                <input id="cor" type="color" onChange={e => setColor(e.target.value)} value={color}/>
              </div>
            </div>

            <button type="submit">
              Cadastrar
            </button>

          </form>

          <span>Não deseja estar aqui? <Link to="/">Volte à home!</Link></span>

        </section>
        <div className="message hidden">
          <i className="fas fa-check" />
          <span>Veículo cadastrado com sucesso!</span>
        </div>

      </div>
    </div>
  );
}

export default CarRegister;