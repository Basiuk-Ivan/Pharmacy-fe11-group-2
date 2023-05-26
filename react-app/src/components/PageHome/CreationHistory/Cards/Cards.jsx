import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Period2005to2008 } from './Card/Period2005to2008';
import { Period2008to2012 } from './Card/Period2008to2012';
import { Period2012to2016 } from './Card/Period2012to2016';
import { Period2016to2018 } from './Card/Period2016to2018';
import { Period2018to2020 } from './Card/Period2018to2020';
import { Period2020to2022 } from './Card/Period2020to2022';
import { boxForDateStyles, historyTextStyles } from '../style';

const Cards = () => (
  <Box sx={boxForDateStyles}>
    <Typography sx={historyTextStyles}>Історія нашого розвитку</Typography>
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Period2005to2008 />
      <Period2008to2012 />
      <Period2012to2016 />
    </Grid>
    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Period2016to2018 />
      <Period2018to2020 />
      <Period2020to2022 />
    </Grid>
  </Box>
);

export default Cards;
