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
  const [currentIndex, setCurrentIndex] = useState(0);

  const getViewedProducts = items => {
    const params = {
      _id: items.join(',')
    };

    axios.get('http://localhost:3004/api/product', { params })
      .then(response => {
        const viewedProd = response.data.prods;
        setViewedProducts(viewedProd);
      })
      .catch(error => {
        throw error;
      });
  };

  useEffect(() => {
    getViewedProducts(viewedItems);
  }, [viewedItems]);

  const handlePreviousClick = () => {
    setCurrentIndex(prevIndex => {
      const nextIndex = prevIndex - 5;
      return nextIndex >= 0 ? nextIndex : viewedProducts.length - 5;
    });
  };

  const handleNextClick = () => {
    setCurrentIndex(prevIndex => {
      const nextIndex = prevIndex + 5;
      return nextIndex < viewedProducts.length ? nextIndex : 0;
    });
  };

  const displayedProducts = viewedProducts.slice(currentIndex, currentIndex + 5);

  return (
    <Box id="youBrowsed" sx={youBrowsedStyle}>
      <Box id="youBrowsedTitleWrapper" sx={youBrowsedTitleWrapperStyle}>
        <Typography sx={titleStyle}>Ви переглядали</Typography>
        <Box id="youBrowsedTitleSlider" sx={youBrowsedTitleSliderStyle}>
          <ArrowBackIosIcon
            fontSize="small"
            sx={{ cursor: 'pointer' }}
            onClick={handlePreviousClick}
          />
          <ArrowForwardIosIcon
            fontSize="small"
            sx={{ cursor: 'pointer' }}
            onClick={handleNextClick}
          />
        </Box>
      </Box>

      <Box id="cardsWrapper" sx={cardsWrapperStyle}>
        {displayedProducts.map(item => (
          <Box
            id="cardWrapper"
            key={item.id}
            sx={cardWrapperStyle}
          >
            <ProductCard productItem={item} isInCart={isInCart} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default YouBrowsed;
