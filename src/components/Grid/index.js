import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTile, removeTile } from "../../features/Grid/actions";

import AddTileButton from "../AddTileButton";
import Tile from "../Tile";

const colors = ["red", "blue", "pink", "yellow", "gray"];

function Grid() {
  let gridTiles = useSelector((state) => state.grid);
  let dispatch = useDispatch();

  return (
    <div>
      <div style={{ maxWidth: 400, overflow: "hidden" }}>
        {gridTiles.map((tile, index) => {
          return (
            <Tile
              {...tile}
              key={index}
              onDoubleClick={(_) => dispatch(removeTile(tile.id))}
            />
          );
        })}
      </div>
      <br />
      <hr />

      <div>
        {colors.map((color) => {
          return (
            <AddTileButton
              key={color}
              color={color}
              onClick={(_) => dispatch(addTile(color))}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Grid;
