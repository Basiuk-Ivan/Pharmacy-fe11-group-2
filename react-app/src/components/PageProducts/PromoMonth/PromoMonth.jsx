import { useSelector } from 'react-redux';

import { Box, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ProductCard from '../../ProductCard/ProductCard';
import {
  cardsWrapperStyle,
  cardWrapperStyle,
  promoMonthStyle,
  promoMonthTitleSliderStyle,
  promoMonthTitleWrapperStyle,
  titleStyle
} from './style';

function PromoMonth() {
  const { products } = useSelector(state => state.products);
  const promoMonthCards = products.slice(0, 5);
  const isInCart = false;

  return (
    <Box id="promoMonth" sx={promoMonthStyle}>
      <Box id="promoMonthTitleWrapper" sx={promoMonthTitleWrapperStyle}>
        <Typography sx={titleStyle}>Акції місяця</Typography>
        <Box id="promoMonthTitleSlider" sx={promoMonthTitleSliderStyle}>
          <ArrowBackIosIcon fontSize="small" sx={{ cursor: 'pointer' }} />
          <ArrowForwardIosIcon fontSize="small" sx={{ cursor: 'pointer' }} />
        </Box>
      </Box>

      <Box id="cardsWrapper" sx={cardsWrapperStyle}>
        {promoMonthCards.map(item => (
          <Box id="cardWrapper" key={item.id} sx={cardWrapperStyle}>
            <ProductCard productItem={item} isInCart={isInCart} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default PromoMonth;
