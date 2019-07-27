// import React from "react";
// import {
//   FETCH_START,
//   FETCH_FAIL,
//   FETCH_SUCCESS,
//   fetchRick
// } from "../action/action";

// export const initialState = {
//   error: "",
//   isFetching: false,
//   rick: []
// };

// export const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_START:
//       return {
//         ...state,
//         isFetching: true,
//         error: ""
//       };
//     case FETCH_FAIL:
//       return {
//         ...state,
//         error: action.payload,
//         isFetching: false
//       };
//     case FETCH_SUCCESS:
//       return {
//         ...state,
//         error: "",
//         isFetching: false,
//         rick: action.payload
//       };

//     default:
//       return state;
//   }
// };
