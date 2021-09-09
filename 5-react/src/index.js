import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProviderForm } from './context/FormContext'
import index from './index.module.css';
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <ProviderForm>
        <ProviderForm>
          <App />
        </ProviderForm>
      </ProviderForm>  
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
