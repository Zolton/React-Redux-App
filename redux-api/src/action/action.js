import axios from "axios";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

// Fetch the data, and send it to the reducer.  This is a function that needs to be invoked elsewhere
//  It doesn't run automatically!

export const fetchRick = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(res => {
      console.log(res);
      dispatch({
        type: FETCH_SUCCESS,
        payload: res.data.results
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: FETCH_FAIL,
        payload: error
      });
    });
};
