import { Box, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector } from 'react-redux';
import ProductCard from '../../ProductCard/ProductCard';
import {
  cardsWrapperStyle, cardWrapperStyle,
  titleStyle,
  youBrowsedStyle,
  youBrowsedTitleSliderStyle,
  youBrowsedTitleWrapperStyle
} from './style';

function YouBrowsed() {
  const { products } = useSelector(state => state.products);
  const youBrowsedCards = products.slice(5, 10);

  return (
    <Box id="youBrowsed" sx={youBrowsedStyle}>
      <Box id="youBrowsedTitleWrapper" sx={youBrowsedTitleWrapperStyle}>
        <Typography sx={titleStyle}>Ви переглядали</Typography>
        <Box id="youBrowsedTitleSlider" sx={youBrowsedTitleSliderStyle}>
          <ArrowBackIosIcon fontSize="small" sx={{ cursor: 'pointer' }} />
          <ArrowForwardIosIcon fontSize="small" sx={{ cursor: 'pointer' }} />
        </Box>
      </Box>

      <Box id="cardsWrapper" sx={cardsWrapperStyle}>

        {youBrowsedCards.map(item => (
          <Box id="cardWrapper" key={item.id} sx={cardWrapperStyle}>
            <ProductCard productItem={item} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default YouBrowsed;
