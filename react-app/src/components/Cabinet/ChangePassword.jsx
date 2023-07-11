import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import ChangePasswordBlock from './ChangePasswordBlock';
import Loading from './Loading';
import { theme as muiTheme } from '../../tools/muiTheme';

const ChangePassword = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={muiTheme}>
      {isLoading && <Loading />}
      {!isLoading && <ChangePasswordBlock />}
    </ThemeProvider>
  );
};

export default ChangePassword;
