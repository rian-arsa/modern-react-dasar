import { combineReducers, createStore } from "redux";

import gridReducer from "../features/Grid/reducer";

let rootReducers = combineReducers({
  grid: gridReducer,
});

let store = createStore(rootReducers);

export default store;
