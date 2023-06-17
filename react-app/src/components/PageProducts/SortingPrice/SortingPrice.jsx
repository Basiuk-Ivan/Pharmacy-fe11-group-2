// import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';

import { ThemeProvider } from '@mui/material/styles';
// import { useLocation } from 'react-router-dom';
import {
  formControlStyle,
  paginationWrapperStyles,
  sortingStyles,
  sortingTitlePriceIconStyles,
  sortingTitlePriceStyles,
  sortingTitleStyles,
  sortingWrapperStyles
} from './style';

import PaginationProducts from '../PaginationProducts';
import { sortingPrice } from '../../../redux/slice/filterBaseSlice';
import { theme } from '../../../tools/muiTheme';
import { changePage } from '../../../redux/slice/numPageSlice';

function SortingPrice() {
  const dispatch = useDispatch();
  // const location = useLocation();
  // const currentCategory = location.pathname.slice(1);
  // const [price, setPrice] = useState(1);
  const filterBase = useSelector(state => state.filterBase);

  // useEffect(() => {
  //   setPrice(1);
  // }, [currentCategory]);

  const handleChange = event => {
    // setPrice(event.target.value);
    dispatch(sortingPrice(event.target.value));
    dispatch(changePage(1));
  };

  return (
    <ThemeProvider theme={theme}>
      <Box id="sortingWrapper" sx={sortingWrapperStyles}>
        <Box id="sorting" sx={sortingStyles}>
          <Box id="sortingTitle" sx={sortingTitleStyles}>СОРТУВАТИ ПО ЦІНІ</Box>
          <Box id="sortingTitlePrice" sx={sortingTitlePriceStyles}>
            <Box id="sortingTitlePriceIcon" sx={sortingTitlePriceIconStyles}>
              <SortIcon />
            </Box>

            <FormControl size="small" sx={formControlStyle}>
              <InputLabel id="selectPrice">Ціна</InputLabel>
              <Select
                labelId="selectPrice"
                id="selectPriceId"
                value={filterBase.sort}
                label="Ціна"
                onChange={handleChange}
              >
                <MenuItem value={1}>Спочатку дешевші</MenuItem>
                <MenuItem value={-1}>Спочатку дорожчі</MenuItem>
              </Select>
            </FormControl>

          </Box>
        </Box>

        <Box id="paginationWrapper" sx={paginationWrapperStyles}>
          <PaginationProducts />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default SortingPrice;
