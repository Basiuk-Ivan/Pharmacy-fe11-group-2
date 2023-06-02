import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { RatingCard } from './components/RatingCard';
import { ProductDetails } from './components/ProductDetails';
import { PriceCard } from './components/PriceCard';
import {
  wrapForCardStyles,
  cardMediaStyles,
  cardContentStyles,
  productNameStyles,
  productDayStyles
} from './style';

import s from './style/ProductCard.module.scss';

const ProductCard = ({ productItem, isInCart }) => {
  const cardWrapStyles = wrapForCardStyles(isInCart);
  const cardMediaStyle = cardMediaStyles(isInCart);
  const cardContentStyle = cardContentStyles(isInCart);

  return (
    <Card sx={cardWrapStyles}>
      <CardMedia sx={cardMediaStyle} image={productItem?.img[0]} title="productImage" />
      <CardContent sx={cardContentStyle}>
        <RatingCard productItem={productItem} />
        <Typography className={s.productName} gutterBottom variant="h5" component="p" sx={productNameStyles}>
          {productItem?.name}
        </Typography>
        <ProductDetails productItem={productItem} />
        <PriceCard productItem={productItem} />
        <Typography variant="span" gutterBottom sx={productDayStyles}>
          Товар дня
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
