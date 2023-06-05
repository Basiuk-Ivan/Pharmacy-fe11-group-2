import { CardContent, Typography, Box } from '@mui/material';
import { RatingCard } from './components/RatingCard';
import { ProductDetails } from './components/ProductDetails';
import { PriceCard } from './components/PriceCard/PriceCard';
import { cardContentStyles, productNameStyles, productDayStyles } from '../../style';

// import s from '../../style/ProductCard.module.scss';

export const CardContentBody = ({ isInCart, productItem }) => {
  const cardContentStyle = cardContentStyles(isInCart);
  const productNameStyle = productNameStyles(isInCart);

  return (
    <CardContent sx={cardContentStyle}>
      <Box sx={{ flex: '1 1 50%' }}>
        <RatingCard productItem={productItem} />
        <Typography
          // className={s.productName}
          gutterBottom
          variant="h5"
          component="p"
          sx={productNameStyle}
        >
          {productItem?.name}
        </Typography>
        <ProductDetails productItem={productItem} isInCart={isInCart} />
      </Box>
      <PriceCard productItem={productItem} isInCart={isInCart} />
      <Typography variant="span" gutterBottom sx={productDayStyles}>
        Товар дня
      </Typography>
    </CardContent>
  );
};
