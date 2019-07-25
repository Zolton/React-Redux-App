import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { FETCH_FAIL, FETCH_SUCCESS, FETCH_START, fetchRick } from "./action/action";
import ReactDOM from "react-dom"

function App(props) {
  
  return <div className="App">
    Hello from App
    {console.log(props)}
    {props.rick ? console.log("state is filled", props) : <h1> Loading, please wait</h1>}
    </div>;
}

const mapStateToProps = state => {
  return {
    error: state.error,
    isFetching: state.isFetching,
    rick: state.rick
  };
};

export default connect(
  mapStateToProps,
  { FETCH_FAIL, FETCH_SUCCESS, FETCH_START, fetchRick }
)(App);
