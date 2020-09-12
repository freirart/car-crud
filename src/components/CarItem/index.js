import React, { useState } from 'react';
import Modal from 'react-modal';

import Form from '../../components/Form';

import './styles.css';

function CarItem({obj, ...rest}) {
  
  const { brand, model, year, plate, color, imgSource } = obj;
  const headerText = `${brand} ${model} (${year})`;
  const [modalIsOpen,setIsOpen] = useState(false);

  let carIndex = 'oi';
  const cars = JSON.parse(localStorage.getItem('cars'));

  function handleCarClick(e) {
    toggleModalOpen();
    carIndex = e.currentTarget.parentNode.parentNode.parentNode.getAttribute('indice');
  }

  function toggleModalOpen() {
    setIsOpen(!modalIsOpen);
  }

  function handleConfirm() {
    console.log({ brand, model, year, plate, color, imgSource });
    // carIndex = cars.indexOf(cars.filter(car => car.plate === plate)[0]);
    // cars[carIndex] = obj;
    toggleModalOpen();
  }

  function handleCancel() {
    toggleModalOpen();
  }

  return (
    <div className="car-item" {...rest}>
      <div className="content">
        <div className="image">
          <img src={imgSource} alt={headerText} />
        </div>
        <div className="text">
          <p>{headerText}</p>
          <small>
            <span style={{background: color}}></span>
            {plate.toUpperCase()}
          </small>
        </div>
        <div className="action">
          <i className="fas fa-edit" onClick={handleCarClick}></i>
          <i className="fas fa-trash-alt" onClick={handleCarClick}></i>
        </div>
      </div>

      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={toggleModalOpen}
        appElement={document.getElementById('root')}
        className="modal-wrapper"
      >
        <Form 
          displayReversed={true} 
          title="Atualizar dados do veículo"
          submitType="Confirmar"
          fieldsValue={obj}
        >
          <div className="btn-group">
            <button type="button" onClick={handleConfirm} className="pseudo-submit">
              Confirmar
            </button>

            <button type="button" onClick={handleCancel} className="cancel">
              Cancelar
            </button>
          </div>
        </Form>
      </Modal>
    </div>

  );
}

export default CarItem;