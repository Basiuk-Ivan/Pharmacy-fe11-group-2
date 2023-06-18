import { useState, useEffect } from 'react';
import { CircularProgress, Stack, Box, Divider } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { NavLink } from 'react-router-dom';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  searchIconStyle,
  inputStyles,
  searchBlockStyle,
  clearIconStyle,
  boxResultStyle,
  boxNameStyle,
  productImageStyle,
  listIconStyle,
  searchBlockInnerStyle
} from './style';
import axios from 'axios';

const SearchActions = () => {
  const [text, setText] = useState('');
  const [products, setProducts] = useState([]);
  const [isFetch, setIsFetch] = useState(false);
  let timeoutId;
  let isFetchId;

  useEffect(() => {
    const responseDelay = 300;
    const noItemsDelay = 200;

    const fetchData = async () => {
      try {
        const url = `http://localhost:3004/api/product?search=${text}`;
        const response = await axios.get(url);

        const prods = response.data.prods;
        setProducts(prods);
        if (!isFetch) {
          isFetchId = setTimeout(() => setIsFetch(true), noItemsDelay);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (text !== '') {
      timeoutId = setTimeout(fetchData, responseDelay);
    }

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(isFetchId);
    };
  }, [text]);

  const handleInputChange = event => {
    clearTimeout(timeoutId);
    clearTimeout(isFetchId);
    setIsFetch(false);
    setText(event.target.value);
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={searchIconStyle} />
      </SearchIconWrapper>
      <StyledInputBase
        sx={inputStyles}
        placeholder=" Пошук . . ."
        inputProps={{ 'aria-label': 'search' }}
        value={text}
        onChange={handleInputChange}
      />

      {text !== '' && (
        <Box
          sx={searchBlockStyle}
        >
          <Stack
            divider={<Divider orientation="horizontal" sx={{ color: 'black' }} flexItem />}
            sx={searchBlockInnerStyle}
          >
            {(products.length > 0) ? products.map(item => (
              <NavLink key={item.id} to={`/${item?.categories[0]}/${item?.id}`}>
                <Stack
                  key={item.id}
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={1}
                >
                  <ListItemIcon sx={listIconStyle}>
                    <img
                      style={productImageStyle}
                      src={item?.img[0]}
                      alt="productImage"
                    />
                  </ListItemIcon>
                  <Box sx={boxNameStyle}>{item.name}</Box>
                </Stack>
              </NavLink>
            ))
              : (isFetch ? (
                <Box sx={boxResultStyle}>За даним запитом нічого не знайдено. Уточніть свій запит.
                </Box>
              ) : (
                <Box sx={boxResultStyle}>
                  <CircularProgress color="success" />
                </Box>
              ))}
          </Stack>
        </Box>
      )}
      {text !== '' && (
      <ClearIcon
        onClick={() => { setText(''); }}
        sx={clearIconStyle}
      />
      )}
    </Search>
  );
};

export default SearchActions;
