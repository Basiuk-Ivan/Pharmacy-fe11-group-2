import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Box, Container } from '@mui/material';

import Filter from '../../components/PageProducts/Filter';
import ChoiceCategory from '../../components/PageProducts/ChoiceCategory';
import PromoMonth from '../../components/PageProducts/PromoMonth';
import YouBrowsed from '../../components/PageProducts/YouBrowsed';
import SortingPrice from '../../components/PageProducts/SortingPrice';
import PaginationProducts from '../../components/PageProducts/PaginationProducts';
import Cards from '../../components/PageProducts/Cards';
import TitleCategory from '../../components/PageProducts/TitleCategory';

import {
  asideAndCardsStyles,
  asideStyles,
  paginationWrapperStyles,
  productsContainerStyles,
  sortingAndCardsStyles
} from './style';

import { fetchPosts } from '../../redux/productsSlice';

function Products() {
  const dispatch = useDispatch();
  // const { products, status, err } = useSelector(state => state.products);
  const { products } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch, products.length]);

  return (
    <Container id="productsContainer" sx={productsContainerStyles}>
      <TitleCategory />

      <Box id="asideAndCards" sx={asideAndCardsStyles}>

        <Box id="aside" sx={asideStyles}>
          <ChoiceCategory />
          <Filter />
        </Box>

        <Box id="sortingAndCards" sx={sortingAndCardsStyles}>
          <SortingPrice />
          <Cards />
          <Box id="paginationDownWrapper" sx={paginationWrapperStyles}>
            <PaginationProducts />
          </Box>
        </Box>

      </Box>
      <PromoMonth />
      <YouBrowsed />
    </Container>
  );
}

export default Products;
