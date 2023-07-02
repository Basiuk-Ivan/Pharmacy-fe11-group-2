import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { StyledEngineProvider } from '@mui/material';
import App from './App';
import store from './redux/store';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './style/reset.scss';
// eslint-disable-next-line import/extensions
import ScrollToTop from './tools/scrolToTop.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ScrollToTop />
        <App />
      </StyledEngineProvider>
    </BrowserRouter>
  </Provider>
);
