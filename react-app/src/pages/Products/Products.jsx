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
// import TitleCategory from '../../components/PageProducts/TitleCategory';
import Bread from '../../components/Favourite/Bread';

import {
  asideAndCardsStyles,
  asideStyles,
  paginationWrapperStyles,
  productsContainerStyles,
  sortingAndCardsStyles
} from './style';

import { fetchProductsData } from '../../redux/slice/productsSlice';

function Products() {
  const dispatch = useDispatch();
  // const { products, status, err } = useSelector(state => state.products);
  const { products } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch, products.length]);

  return (
    <Container disableGutters id="productsContainer" sx={productsContainerStyles}>
      {/* <TitleCategory /> */}
      <Bread />
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
