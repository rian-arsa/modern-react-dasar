import { ADD_TILE, REMOVE_TILE } from "./constants";

export function addTile(color) {
  return {
    type: ADD_TILE,
    created_at: Date.now(),
    color,
  };
}

export function removeTile(id) {
  // <--- jangan lupa export
  return {
    type: REMOVE_TILE,
    id,
  };
}
