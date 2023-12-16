import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from "./App";
import reportWebVitals from './reportWebVitals';
// import { configureStore } from "@reduxjs/toolkit";
import { ThemeProvider } from 'styled-components';
import { theme } from "./theme";

// const initialState = {
//   tasks: [],
// };

// const taskReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "addTask":
//       return {
//         ...state,
//         tasks: [
//           ...state.tasks,
//           {
//             content: action.payload
//           },
//         ],
//       };

//     default:
//       return state;
//   }
// };

// const addTask = content => ({
//   type: "addTask",
//   payload: content,
// })

// const store = configureStore({reducer: taskReducer});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
