import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Container } from '@mui/material';
import Filter from '../../components/PageProducts/Filter';
import ChoiceCategory from '../../components/PageProducts/ChoiceCategory';
// import PromoMonth from '../../components/PageProducts/PromoMonth';
// import YouBrowsed from '../../components/PageProducts/YouBrowsed';
import SortingPrice from '../../components/PageProducts/SortingPrice';
import PaginationProducts from '../../components/PageProducts/PaginationProducts';
import Cards from '../../components/PageProducts/Cards';
import TitleCategory from '../../components/PageProducts/TitleCategory';
import Bread from '../../components/Bread';
import RequestString from '../../components/PageProducts/RequestString';

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
  const { numPage } = useSelector(state => state.numPage);
  const filterBase = useSelector(state => state.filterBase);
  const { category } = useParams();

  useEffect(() => {
    dispatch(fetchProductsData(RequestString(filterBase, numPage)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterBase.categories, filterBase.sort, numPage]);

  return (
    <Container disableGutters id="productsContainer" sx={productsContainerStyles}>
      <Box sx={{ mt: '-20px' }}>
        <Bread />
      </Box>
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
            <PaginationProducts category={category} />
          </Box>
        </Box>
      </Box>
      {/* <PromoMonth /> */}
      {/* <YouBrowsed /> */}
    </Container>
  );
}

export default Products;
