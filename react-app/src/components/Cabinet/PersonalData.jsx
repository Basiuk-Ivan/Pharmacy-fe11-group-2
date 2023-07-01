import {Stack} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {useEffect, useState} from 'react';
import { theme as muiTheme } from '../../tools/muiTheme';
import DataBlock from "./DataBlock.jsx";
import CircularProgress from '@mui/material/CircularProgress';

const PersonalData = () => {

const [isLoading, setLoading] = useState(true);

useEffect(()=> {
  setTimeout(() => {
    setLoading(false)
  },500)
}, [])


  return (
    <ThemeProvider theme={muiTheme}>
      {isLoading ?
          <Stack spacing={2} direction="row"  justifyContent="center">
            <CircularProgress color="primary" />
            <CircularProgress color="primary" />
            <CircularProgress color="primary" />
            <CircularProgress color="primary" />
            <CircularProgress color="primary" />
          </Stack>
          : <DataBlock/>}
    </ThemeProvider>
  );
};

export default PersonalData;
