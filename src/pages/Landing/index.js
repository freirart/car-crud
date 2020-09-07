import { Link } from 'react-router-dom';
import React from 'react';

import landingImg from '../../assets/images/hero.png';

import './styles.css';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">

        <div className="caption">
          <h2>Buscando inspiração?</h2>
          <h3>Descubra os melhores veículos da internet!</h3>
        </div>

        <img src={landingImg} className="hero-image" alt="Carro" />

        <div className="buttons-container">
          <Link to="/car-list" className="car-list">
            <i className="fas fa-stream" />
            Lista de carros
          </Link>
          
          <Link to="/car-register" className="car-register">
            <i className="fas fa-plus" />
            Cadastrar um carro
          </Link>
        </div>

        <span className="credits">
					<p>Desenvolvido de <i className="fas fa-heart"></i> por
          <a href="https://www.linkedin.com/in/freirart"> Artur Freire</a>.</p>
				</span>

      </div>
    </div>
  );
}

export default Landing;