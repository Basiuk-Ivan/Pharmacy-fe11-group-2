import { useState, useEffect, useRef } from 'react';
import { CircularProgress, Stack, Box, Divider } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { NavLink } from 'react-router-dom';
import { request } from '../../../tools/request';

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

const SearchActions = () => {
  const [text, setText] = useState('');
  const [products, setProducts] = useState([]);
  const [isFetch, setIsFetch] = useState(false);
  const timeoutIdRef = useRef(null);
  const isFetchIdRef = useRef(null);

  useEffect(() => {
    const responseDelay = 300;
    const noItemsDelay = 200;

    const fetchData = async () => {
      try {
        const { result } = await request({
          url: '',
          method: 'GET',
          params: { search: text }
        });

        const { data } = result;

        setProducts(data);

        if (!isFetch) {
          isFetchIdRef.current = setTimeout(() => setIsFetch(true), noItemsDelay);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (text !== '') {
      timeoutIdRef.current = setTimeout(fetchData, responseDelay);
    }

    return () => {
      clearTimeout(timeoutIdRef.current);
      clearTimeout(isFetchIdRef.current);
    };
  }, [text, isFetch]);

  const handleInputChange = event => {
    clearTimeout(timeoutIdRef.current);
    clearTimeout(isFetchIdRef.current);
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
        <Box sx={searchBlockStyle}>
          <Stack
            divider={<Divider orientation="horizontal" sx={{ color: 'black' }} flexItem />}
            sx={searchBlockInnerStyle}
          >
            {products.length > 0 ? (
              products.map(item => (
                <NavLink key={item.id} to={`/${item?.categories[0]}/${item?.id}`}>
                  <Stack
                    key={item.id}
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={1}
                  >
                    <ListItemIcon sx={listIconStyle}>
                      <img style={productImageStyle} src={item?.img[0]} alt="productImage" />
                    </ListItemIcon>
                    <Box sx={boxNameStyle}>{item.name}</Box>
                  </Stack>
                </NavLink>
              ))
            ) : (
              <Box sx={boxResultStyle}>
                {isFetch ? (
                  'За даним запитом нічого не знайдено. Уточніть свій запит.'
                ) : (
                  <CircularProgress color="success" />
                )}
              </Box>
            )}
          </Stack>
        </Box>
      )}
      {text !== '' && <ClearIcon onClick={() => setText('')} sx={clearIconStyle} />}
    </Search>
  );
};

export default SearchActions;
