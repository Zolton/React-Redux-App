//import React from "react";
// import "./App.css";
// import { connect } from "react-redux";
// import {
//   FETCH_FAIL,
//   FETCH_SUCCESS,
//   FETCH_START,
//   fetchRick
// } from "./action/action";
// import ReactDOM from "react-dom";

// function App(props) {
//   // Importing the function getRick from action.js, but need a way to invoke it
//   //  This constant serves one purpose - as a way to invoke the function from props
//   const getRick = event => {
//     props.fetchRick();
//   };

//   return (
//     <div className="App">
//       {/* This button is useless except as a way to invoke props in Redux.  With hooks, it'd be
//     done automatically with a useEffect hook */}
//       <button
//         onClick={() => {
//           getRick();
//         }}
//       >
//         Click me
//       </button>
//       {props.rick ? (
//         props.rick.map(rick => (
//           <div className="rickytickytavy">
//             <h3>Name: {rick.name}</h3>
//             <img src={rick.image} />
//             <h3>Current status: {rick.status}</h3>
//             <h4>Last known location: {rick.location.name}</h4>
//           </div>
//         ))
//       ) : (
//         <h1> Loading, please wait</h1>
//       )}
//     </div>
//   );
// }

// const mapStateToProps = state => {
//   console.log("state from mpts", state);
//   return {
//     error: state.error,
//     isFetching: state.isFetching,
//     rick: state.rick
//   };
// };

// export default connect(
//   mapStateToProps,
//   { FETCH_FAIL, FETCH_SUCCESS, FETCH_START, fetchRick }
// )(App);

import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

function App() {
  const [rickData, setRickData] = useState();

  useEffect(() => {
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

  return (
    <div>
      Hello from App
      {console.log(rickData)}
      {rickData ? (
        rickData.map(rick => (
          <div className="rickytickytavy">
            <h3>Name: {rick.name}</h3>
            <img src={rick.image} />
            <h3>Current status: {rick.status}</h3>
            <h4>Last known location: {rick.location.name}</h4>
          </div>
        ))
      ) : (
        <h1> Loading, please wait</h1>
      )}
    </div>
  );
}

export default App;
