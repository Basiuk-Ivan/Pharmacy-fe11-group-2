import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { ThemeProvider, createTheme } from '@mui/material';
import App from './App';
import store from './redux/store';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './style/reset.scss';

// const theme = createTheme({
//   palette: { primary: { main: '#fff' } }
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <ThemeProvider theme={theme}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </ThemeProvider> */}
  </Provider>
);
