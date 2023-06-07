import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';

import {
  paginationWrapperStyles,
  sortingStyles,
  sortingTitlePriceIconStyles,
  sortingTitlePriceStyles,
  sortingTitleStyles,
  sortingWrapperStyles
} from './style';

import PaginationProducts from '../PaginationProducts';
import { sortingPrice } from '../../../redux/slice/filterBaseSlice';

function SortingPrice() {
  const dispatch = useDispatch();
  const filterBase = useSelector(state => state.filterBase);
  const [price, setPrice] = useState('');

  const handleChange = event => {
    setPrice(event.target.value);
    dispatch(sortingPrice(event.target.value));
  };

  useEffect(() => {
    console.log(filterBase);
  }, [filterBase]);

  return (
    <Box id="sortingWrapper" sx={sortingWrapperStyles}>
      <Box id="sorting" sx={sortingStyles}>
        <Box id="sortingTitle" sx={sortingTitleStyles}>СОРТУВАТИ ПО ЦІНІ</Box>
        <Box id="sortingTitlePrice" sx={sortingTitlePriceStyles}>
          <Box id="sortingTitlePriceIcon" sx={sortingTitlePriceIconStyles}>
            <SortIcon />
          </Box>

          <FormControl size="small" sx={{ m: 1, minWidth: 200, border: 'none' }}>
            <InputLabel id="selectPrice">Ціна</InputLabel>
            <Select
              labelId="selectPriceLabel"
              id="selectPriceId"
              value={price}
              label="Ціна"
              onChange={handleChange}
            >
              <MenuItem value>Спочатку дешевші</MenuItem>
              <MenuItem value={false}>Спочатку дорожчі</MenuItem>
            </Select>
          </FormControl>

        </Box>
      </Box>

      <Box id="paginationWrapper" sx={paginationWrapperStyles}>
        <PaginationProducts />
      </Box>
    </Box>
  );
}

export default SortingPrice;
