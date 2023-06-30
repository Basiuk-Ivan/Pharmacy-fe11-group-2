import { Box, Typography } from '@mui/material';
import { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import ProductCard from '../../ProductCard/ProductCard';
import {
  cardsWrapperStyle,
  cardWrapperStyle,
  titleStyle,
  youBrowsedStyle,
  youBrowsedTitleWrapperStyle
} from './style';

function YouBrowsed() {
  const isInCart = false;
  const viewedItems = useMemo(() => JSON.parse(localStorage.getItem('viewedProducts')) || [], []);
  const [viewedProducts, setViewedProducts] = useState([]);
  const favoriteItems = useSelector(state => state.favouriteItems.favouriteItems);
  // console.log('favoriteItems:', favoriteItems);

  const getViewedProducts = items => {
    if (items.length > 0) {
      const params = {
        _id: items.join(',')
      };

      axios
        // .get('http://localhost:3004/api/product', { params })
        .get(`${process.env.VITE_API_URL}/api/product`, { params })
        .then(response => {
          const viewedProd = response.data.data;
          setViewedProducts(viewedProd);
        })
        .catch(error => {
          throw error;
        });
    }
  };

  useEffect(() => {
    getViewedProducts(viewedItems);
  }, [viewedItems]);

  const displayedProducts = viewedItems
    .map(itemId => viewedProducts.find(product => product.id === itemId))
    .filter(Boolean)
    .slice(0, 5);

  return (
    <Box id="youBrowsed" sx={youBrowsedStyle}>
      <Box id="youBrowsedTitleWrapper" sx={youBrowsedTitleWrapperStyle}>
        <Typography sx={titleStyle}>Ви переглядали</Typography>
      </Box>

      <Box id="cardsWrapper" sx={cardsWrapperStyle}>
        {displayedProducts.map(item => (
          <Box id="cardWrapper" key={item.id} sx={cardWrapperStyle}>
            <ProductCard productItem={item} isInCart={isInCart} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default YouBrowsed;
