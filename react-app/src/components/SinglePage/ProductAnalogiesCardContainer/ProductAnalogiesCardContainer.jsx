import { Box, Grid, Typography, Tabs, Tab } from '@mui/material';
import React from 'react';
import ProductCard from '../../ProductCard/index.js';

const ProductAnalogiesCardContainer = ({ goods }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Typography variant="h4" component="h4" gutterBottom sx={{}}>
        Аналоги
      </Typography>

      <Grid container sx={{}}>
        <Grid item lg={12}>
          <Grid container spacing={4} sx={{}}>
            <Grid item lg={3}>
              <ProductCard productItem={goods} />
            </Grid>
            <Grid item lg={3}>
              <ProductCard productItem={goods} />
            </Grid>
            <Grid item lg={3}>
              <ProductCard productItem={goods} />
            </Grid>
            <Grid item lg={3}>
              <ProductCard productItem={goods} />
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductAnalogiesCardContainer;
