import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Helmet } from 'react-helmet';

function TitleApp() {
  return (
    <Helmet>
      <title>Grant Eadie</title>
    </Helmet>
  )
}

ReactDOM.render(
  <BrowserRouter>
  <TitleApp/>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
