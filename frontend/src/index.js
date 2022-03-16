import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StyledEngineProvider } from "@mui/material/styles";
import {Provider} from "react-redux";
import store from './store';
import  {positions,transitions,Provider as AlertProvider} from 'react-alert';
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout:5000,
  position:positions.BOTTOM_CENTER,
  transition: transitions.SCALE,
}
ReactDOM.render(
  <StyledEngineProvider injectFirst>
  <AlertProvider template={AlertTemplate}{...options}>
  <Provider store={store}>
    <App />
    </Provider>
    </AlertProvider>
  </StyledEngineProvider>,
  document.getElementById('root')
);

