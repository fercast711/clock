import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
//css
import "bootstrap/dist/css/bootstrap.css"
import "./index.css"
//redux
import { Provider } from 'react-redux';
import store from './store/store';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
      
    
  </React.StrictMode>
);

