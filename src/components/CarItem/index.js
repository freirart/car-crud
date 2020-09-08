import React from 'react';

import './styles.css';

function CarItem({ key, obj }) {
  
  const { brand, model, year, plate, color, imgSource } = obj;
  
  const headerText = `${brand} ${model} (${year})`;

  return(
    <div className="car-item">
      <div key={key} className="content">
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
      </div>
    </div>
  );
}

export default CarItem;