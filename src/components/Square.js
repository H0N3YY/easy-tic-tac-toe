import React from "react";
import "./Square.css";

const Square = ({ value, onClick, key,  }) => {
  
  return (
    <button key={key} className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
