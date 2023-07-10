import { useEffect, useState } from 'react';
import DataBlock from './DataBlock';
import Loading from "./Loading";
import { ThemeProvider } from '@mui/material/styles';
import { theme as muiTheme } from '../../tools/muiTheme';


const PersonalData = () => {
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
      {!isLoading && <DataBlock />}
    </ThemeProvider>
  );
};

export default PersonalData;
