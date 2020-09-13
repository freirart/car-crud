import React, { useState } from 'react';
import Modal from 'react-modal';

import Form from '../../components/Form';

import './styles.css';

function CarItem({obj, ...rest}) {
  
  const { brand, model, year, plate, color, imgSource } = obj;
  const headerText = `${brand} ${model} (${year})`;
  
  const [modalIsOpen,setIsOpen] = useState(false);

  function handleDelete(e) {
    const car = e.currentTarget.parentNode.parentNode.parentNode;
    const carIndex = car.getAttribute('indice');
    const cars = JSON.parse(localStorage.getItem('cars'));
    cars.splice(carIndex, 1);
    localStorage.setItem('cars', JSON.stringify(cars));
    car.classList.add("hidden");
    setTimeout(() => {
      car.classList.add("hidden-absolute");
    }, 400);
  }

  function toggleModalOpen() {
    setIsOpen(!modalIsOpen);
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
          <i className="fas fa-edit" onClick={toggleModalOpen}></i>
          <i className="fas fa-trash-alt" onClick={handleDelete}></i>
        </div>
      </div>

      <Modal 
        isOpen={modalIsOpen} 
        onRequestClose={toggleModalOpen}
        appElement={document.getElementById('root')}
        className="modal-wrapper"
        style={
          {
            overlay: {
              backgroundColor: 'rgba(0,0,0,0.3)',
            }
          }
        }
        closeTimeoutMS={400}
      >
        <Form 
          displayReversed={true} 
          title="Atualizar dados do veículo"
          submitType="Confirmar"
          fieldsValue={obj}
          carIndex=""
          className="form-control"
        />
      </Modal>
    </div>

  );
}

export default CarItem;