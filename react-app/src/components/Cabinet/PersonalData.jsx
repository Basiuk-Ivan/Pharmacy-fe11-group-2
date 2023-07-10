import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import DataBlock from './DataBlock';
import Loading from './Loading';
import { theme as muiTheme } from '../../tools/muiTheme';

const PersonalData = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <ThemeProvider theme={muiTheme}>
      {isLoading && <Loading />}
      {!isLoading && <DataBlock />}
    </ThemeProvider>
  );
};

export default PersonalData;
