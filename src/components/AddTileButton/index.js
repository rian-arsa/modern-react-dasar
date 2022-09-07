import React from "react";
import { func, string } from "prop-types";

function AddTileButton({ onClick, color }) {
  const buttonStyles = {
    backgroundColor: color,
    display: "inline-block",
    width: 20,
    height: 20,
    cursor: "pointer",
    border: "1px solid black",
  };
  return <div style={buttonStyles} onClick={onClick}></div>;
}

AddTileButton.propTypes = {
  onClick: func.isRequired,
  color: string.isRequired,
};

export default AddTileButton;
