import React from "react";
import './CarDiv.css'

function CarDiv(props) {
  const { image, info } = props;

  return (
    <div className="carDiv">
      <img className="cardiv-image" src={require('../../images/' + image)} alt={image}/>
      <div className="info">
        {info}
      </div>
      <div className="overlap-group">
        <div className="rectangle-10"></div>
        <div className="extra">
          +INFO
        </div>
      </div>
    </div>
  );  
}

export default CarDiv;