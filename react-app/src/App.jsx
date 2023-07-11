import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { theme } from './tools/muiTheme';
import AppRouter from './router/AppRouter';
import { startLoading } from './tools/startLoading';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token) {
      startLoading(token, dispatch);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <>
        {/* <CssBaseline /> */}
        <AppRouter />
      </>
    </ThemeProvider>
  );
};
export default App;
