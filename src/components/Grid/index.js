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
      <h1>APP SQUARE</h1>
      <h5>By : Rian Arsa</h5>
      <hr />
      {gridTiles.length !== 0 && <h4>Ketuk 2 kali untuk menghapus</h4>}
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

      <h4>Silahkan klik salah satu kotak dibawah untuk membuat kotak diatas</h4>

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
