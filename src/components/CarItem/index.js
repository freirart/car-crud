import React, { useState } from 'react';
import Modal from 'react-modal';

import Form from '../../components/Form';

import './styles.css';

function CarItem({obj, ...rest}) {
  
  const { brand, model, year, plate, color, imgSource } = obj;
  const headerText = `${brand} ${model} (${year})`;
  const [modalIsOpen,setIsOpen] = useState(false);

  function handleCarClick(e) {
    toggleModalOpen();
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
          carIndex=""
          className="form-control"
        />
      </Modal>
    </div>

  );
}

export default CarItem;