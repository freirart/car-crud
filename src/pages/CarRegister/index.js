import React from 'react';

import './styles.css';

import Form from '../../components/Form';

function CarRegister() {

  return (
    <div id="car-register-page">
        <Form displayReversed={false} title="Cadastrar um novo veículo"/>
    </div>
  );
}

export default CarRegister;