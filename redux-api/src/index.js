import React, {useEffect, useState, useContext} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import { reducer } from "./reducer/reducer";
// import thunk from "redux-thunk"
import rickContext from "./context";
import axios from "axios"

//const store = createStore(reducer, applyMiddleware(thunk));


exportuseEffect(() => {
  axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(res => {
      console.log(res);
      setRickData(res.data.results);
    })
    .catch(error => {
      console.log("Danger Will Robinson", error);
    });
}, []);

export const [ricksFabledSafe] = useState(rickData)


export const [rickData, setRickData] = useState();
console.log(rickData)

ReactDOM.render(
  // <Provider store={store}>
  <rickContext.Provider value={ricksFabledSafe}>
    <App />
  </rickContext.Provider>,
  // </Provider>,
  document.getElementById("root")
);
