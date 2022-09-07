import { Provider } from "react-redux";
import "./App.css";
import store from "./app/store";
import Grid from "./components/Grid";

function App() {
  return (
    <div style={{ margin: "50px" }}>
      <Provider store={store}>
        <Grid />
      </Provider>
    </div>
  );
}

export default App;
