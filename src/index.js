import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { SearchReducer } from "./reducers/SearchReducer";
import { createStore, combineReducers } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

let Reducers = combineReducers({
  movieSearchList: SearchReducer,
});

const store = createStore(Reducers);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>
);
