import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Skeleton, Stack } from '@mui/material';
import { SkeletonCategory } from '../../utils/Skeleton/SkeletonCategory';
import Filter from '../../components/PageProducts/Filter';
import ChoiceCategory from '../../components/PageProducts/ChoiceCategory';
import PromoMonth from '../../components/PageProducts/PromoMonth';
import YouBrowsed from '../../components/PageProducts/YouBrowsed';
import SortingPrice from '../../components/PageProducts/SortingPrice';
import PaginationProducts from '../../components/PageProducts/PaginationProducts';
import Cards from '../../components/PageProducts/Cards';
import TitleCategory from '../../components/PageProducts/TitleCategory';
import BreadPageProducts from '../../components/PageProducts/BreadPageProducts';

import {
  asideAndCardsStyles,
  asideStyles,
  paginationWrapperStyles,
  productsContainerStyles,
  sortingAndCardsStyles
} from './style';

import { fetchProductsData } from '../../redux/slice/productsSlice';
import ModalWindow from '../../components/ModalWindow';
import { modalErrortPass } from '../../redux/slice/modalSlice';

function Products() {
  const [showSkeleton, setShowSkeleton] = useState(true);
  const errorModal = useSelector(state => state.modalSlice.errorModal);

  const location = useLocation();
  const queryString = location.search;
  const dispatch = useDispatch();
  const { category } = useParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    dispatch(fetchProductsData(queryString));
  }, [queryString]);

  const handleCloseErrorModal = () => {
    dispatch(modalErrortPass(false));
  };

  return (
    <>
      {!!errorModal && (
        <ModalWindow
          mainText="Упс... Щось пішло не так"
          handleClick={() => {}}
          handleClose={handleCloseErrorModal}
          isOpened={errorModal}
          actions={false}
        />
      )}
      <Container disableGutters id="productsContainer" sx={productsContainerStyles}>
        <Box sx={{ mt: '-20px' }}>
          <BreadPageProducts />
        </Box>
        <TitleCategory />
        <Box id="asideAndCards" sx={asideAndCardsStyles}>
          <Box id="aside" sx={asideStyles}>
            <ChoiceCategory />
            <Filter />
          </Box>

          <Box id="sortingAndCards" sx={sortingAndCardsStyles}>
            <SortingPrice />
            {showSkeleton ? <SkeletonCategory /> : <Cards />}
            <Box id="paginationDownWrapper" sx={paginationWrapperStyles}>
              <PaginationProducts category={category} />
            </Box>
          </Box>
        </Box>
        <PromoMonth />
        <YouBrowsed />
      </Container>
    </>
  );
}

export default Products;
