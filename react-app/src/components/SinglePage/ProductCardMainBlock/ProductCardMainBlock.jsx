import { Grid } from '@mui/material';
import PriceBlock from './components/PriceBlock';
import InformBlock from './components/InformBlock';
import VerticalImgTabPanel from "./components/VerticalImgTabPanel";

const ProductCardMainBlock = ({ productItem }) => {
  return (
    <Grid container sx={{ rowGap: '15px', mt: '10px' }}>
      <Grid item xs={12} sm={12} lg={5}>
        <VerticalImgTabPanel productItem={productItem} />
      </Grid>
      <InformBlock productItem={productItem} />
      <PriceBlock productItem={productItem}/>
    </Grid>
  );
};

export default ProductCardMainBlock;
