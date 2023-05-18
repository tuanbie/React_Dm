import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import imageReducer from "./redux/imageReducer";

const store = createStore(imageReducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
  
);
