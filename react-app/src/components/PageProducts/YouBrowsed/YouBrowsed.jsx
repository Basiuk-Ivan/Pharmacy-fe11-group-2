import { Box, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import ProductCard from '../../ProductCard/ProductCard';
import {
  cardsWrapperStyle,
  cardWrapperStyle,
  titleStyle,
  youBrowsedStyle,
  youBrowsedTitleSliderStyle,
  youBrowsedTitleWrapperStyle
} from './style';

function YouBrowsed() {
  const isInCart = false;
  const viewedItems = useMemo(() => JSON.parse(localStorage.getItem('viewedProducts')) || [], []);

  const [viewedProducts, setViewedProducts] = useState([]);

  const getViewedProducts = items => {
    const params = {
      _id: items.join(',')
    };

    axios.get('http://localhost:3004/api/product', { params })
      .then(response => {
        // Handle the response
        const viewedProd = response.data.prods;
        setViewedProducts(viewedProd);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    getViewedProducts(viewedItems);
  }, [viewedItems]);

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
        {viewedProducts.map(item => (
          <Box id="cardWrapper" key={item.id} sx={cardWrapperStyle}>
            <ProductCard productItem={item} isInCart={isInCart} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default YouBrowsed;
