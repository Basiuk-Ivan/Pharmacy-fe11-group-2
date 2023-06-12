import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  direction: 'rtl',
  typography: {
    fontFamily: 'Roboto, sans-serif'
  },
  palette: {
    primary: {
      main: '#fff'
    }
  }
});

export const containerMainStyles = {
  marginTop: '133px',
  '@media (max-width: 899px)': {
    marginTop: '58px'
  }
};

export const toolBarStyles = { justifyContent: 'space-between' };
