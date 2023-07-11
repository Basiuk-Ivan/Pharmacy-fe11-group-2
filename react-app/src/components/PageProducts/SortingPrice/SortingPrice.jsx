import { useDispatch, useSelector } from 'react-redux';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';
import { ThemeProvider } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { sortingPrice } from '../../../redux/slice/filterBaseSlice';
import { theme } from '../../../tools/muiTheme';
import { changePage } from '../../../redux/slice/numPageSlice';

import {
  formControlStyle,
  sortingStyles,
  sortingTitlePriceIconStyles,
  sortingTitlePriceStyles,
  sortingTitleStyles,
  sortingWrapperStyles
} from './style';

function SortingPrice() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const queryString = location.search;
  const searchParams = new URLSearchParams(queryString);

  const handleChange = event => {
    dispatch(sortingPrice(event.target.value));
    dispatch(changePage(1));
    searchParams.set('sort', event.target.value.toString());
    navigate({ search: searchParams.toString(), replace: true });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box id="sortingWrapper" sx={sortingWrapperStyles}>
        <Box id="sorting" sx={sortingStyles}>
          <Box id="sortingTitle" sx={sortingTitleStyles}>
            СОРТУВАТИ ПО ЦІНІ
          </Box>
          <Box id="sortingTitlePrice" sx={sortingTitlePriceStyles}>
            <Box id="sortingTitlePriceIcon" sx={sortingTitlePriceIconStyles}>
              <SortIcon />
            </Box>

            <FormControl size="small" sx={formControlStyle}>
              <InputLabel id="selectPrice">Ціна</InputLabel>
              <Select
                labelId="selectPrice"
                id="selectPriceId"
                value={searchParams.get('sort')}
                label="Ціна"
                onChange={handleChange}
              >
                <MenuItem value={1}>Спочатку дешевші</MenuItem>
                <MenuItem value={-1}>Спочатку дорожчі</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default SortingPrice;
