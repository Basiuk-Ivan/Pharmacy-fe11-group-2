import { Box, Grid, Typography } from '@mui/material';
import ProductCard from '../../ProductCard/index';

const ProductAnalogiesCardContainer = ({ goods }) =>
// const [value, setValue] = useState(0);
//
// const handleChange = (event, newValue) => {
//   setValue(newValue);
// };

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
export default ProductAnalogiesCardContainer;
