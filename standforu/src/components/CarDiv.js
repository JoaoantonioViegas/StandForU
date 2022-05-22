import React from "react";
import './CarDiv.css'

function CarDiv(props) {
  const { image, info, extra } = props;

  return (
    <div className="car7">
      <img className="image" src={window.location.origin +'/images/'+ image} alt="audi-a1"/>
      <div className="info">
        {info}
      </div>
      <div className="overlap-group">
        <div className="rectangle-10"></div>
        <div className="extra">
          {extra}
        </div>
      </div>
    </div>
  );
}

export default CarDiv;