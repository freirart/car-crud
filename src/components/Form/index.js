import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import defaultImage from '../../assets/images/default-image.png';

import './styles.css';

function Form({displayReversed, title, submitType, fieldsValue, carIndex}) {

  if (!title) title = 'Cadastrar um novo veículo';

  const cars = JSON.parse(localStorage.getItem('cars')) || [];

  const history = useHistory();

  const [imgSource, setImageSource] = useState(fieldsValue?.imgSource);
  const [model, setModel] = useState(fieldsValue?.model);
  const [brand, setBrand] = useState(fieldsValue?.brand);
  const [year, setYear] = useState(fieldsValue?.year);
  const [plate, setPlate] = useState(fieldsValue?.plate);
  const [color, setColor] = useState(fieldsValue?.color || '#fbc968');

  function handlePlacaChange(e) {
    if (e.target.value.length === 3) 
      e.target.value += '-';
    if (e.target.value.length >= 7)
      setPlate(e.target.value);
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

  function handleConfirm() {
    const carIndex = cars.indexOf(cars.filter(car => car.plate === plate)[0]);
    cars[carIndex] = { imgSource, model, brand, year, plate, color };
    localStorage.setItem('cars', JSON.stringify(cars));
    window.location.reload();
  }

  function handleCancel() {
    window.location.reload();
  }

  return(
    <>
      <div id="car-register-page-content" className="container">
        <section className={`form-section${displayReversed ? ' reversed' : ''}`}>
          <form onSubmit={handleSubmit}>
            <h1>{title}</h1>
            <div className="input-block">
              <label htmlFor="url">Entre o link da foto do seu veículo</label>
              <input 
                id="url" 
                type="text" 
                onChange={e => setImageSource(e.target.value)}
                required
                value={imgSource}
              />
            </div>

            <div className="input-block">
              <label htmlFor="modelo">Modelo</label>
              <input id="modelo" 
                onChange={e => setModel(e.target.value)} 
                type="text" 
                value={model}
                required
              />
            </div>

            <div className="input-group">
              <div className="input-block w50">
                <label htmlFor="marca">Marca</label>
                <input 
                  id="marca" 
                  onChange={e => setBrand(e.target.value)} 
                  type="text" 
                  required
                  value={brand}
                />
              </div>
              <div className="input-block w50">
                <label htmlFor="ano">Ano</label>
                <input 
                  id="ano" 
                  type="text" 
                  onChange={e => setYear(e.target.value)} 
                  required
                  value={year}
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input-block w50">
                <label htmlFor="placa">Placa</label>
                <input 
                  id="placa" 
                  type="text" 
                  onKeyUp={handlePlacaChange}
                  onChange={e => setPlate(e.target.value)} 
                  placeholder="XXX-XXXX"
                  required
                  minLength="8"
                  maxLength="8"
                  value={plate}
                  disabled={submitType ? true : false}
                />
              </div>
              <div className="input-block w50">
                <label htmlFor="cor">Cor</label>
                <input id="cor" type="color" onChange={e => setColor(e.target.value)} value={color}/>
              </div>
            </div>

            
            <button type="submit" className={submitType ? ' hidden': ''}>
              Cadastrar
            </button>
            
            {submitType && (
              <div className="btn-group-wrapper">
                <div className="btn-group">
                  <button type="button" onClick={handleCancel} className="cancel">
                    Cancelar
                  </button>
                  
                  <button type="button" onClick={handleConfirm} className="pseudo-submit">
                    Confirmar
                  </button>
                </div>
              </div>
            )}
          </form>

          <span>Não deseja estar aqui? <Link to="/">Volte à home!</Link></span>
        </section>
        <section className={`img-section${displayReversed ? ' reversed' : ''}`}>
          <img src={imgSource || defaultImage} alt="Car"/>
        </section>
      </div>
      <div className="message hidden">
        <i className="fas fa-check" />
        <span>Veículo cadastrado com sucesso!</span>
      </div>
    </>
  );
}

export default Form;