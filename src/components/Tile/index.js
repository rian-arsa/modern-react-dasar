import React from "react";
import { string, number, func } from "prop-types";

import "./style.css";

function Tile({ color, id, onDoubleClick }) {
  return (
    <div
      className="tile"
      style={{ backgroundColor: color }}
      onDoubleClick={onDoubleClick}
    ></div>
  );
}

Tile.defaultProps = {
  color: "gray",
};

Tile.propTypes = {
  color: string,
  id: number.isRequired,
  onDoubleClick: func.isRequired,
};

export default Tile;
