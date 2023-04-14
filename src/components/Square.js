import React from "react";
import "./Square.css";

const Square = ({ value, onClick }) => {
  //assigning clss name depending on the value
  const style = value === "X" ? "square x" : "square o";

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
