import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

import { Stack} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Search, SearchIconWrapper, StyledInputBase, searchIconStyle, inputStyles } from './style';

const SearchActions = () => {
  const [text, setText] = useState('');
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const delay = 300;
    let timeoutId;

    const fetchData = async () => {
      try {
        const url = `http://localhost:3004/api/product?search=${text}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const { prods } = await response.json();
        setproducts(prods);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching data:', error);
      }
    };

    if (text !== '') {
      timeoutId = setTimeout(fetchData, delay);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [text]);

  const handleInputChange = event => {
    setText(event.target.value);
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={searchIconStyle} />
      </SearchIconWrapper>
      <StyledInputBase
        sx={inputStyles}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        value={text}
        onChange={handleInputChange}
      />

      {text !== '' && (
        <Box
          sx={{
            position: 'absolute',
            top: '60px',
            left: '50%',
            p: '5px',
            borderRadius: '10px',
            transform: 'translateX(-50%)',
            zIndex: '2',
            width: { xs: '250px', sm: '310px' },
            maxWidth: 360,
            bgcolor: '#eaeaea',
            maxHeight: 320
          }}
        >
          <Stack
            divider={<Divider orientation="horizontal" sx={{ color: 'black' }} flexItem />}
            sx={{ maxWidth: 360, maxHeight: 310, overflowY: 'auto', minHeight: 100 }}
          >
            {products.length > 0 ? products.map(item => (
              <NavLink key={item.id} to={`/${item?.categories[0]}/${item?.id}`}>
                <Stack
                  key={item.id}
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={1}
                >
                  <ListItemIcon sx={{ width: { xs: '50px', sm: '70px' }, height: { xs: '70px', sm: '100px' } }}>
                    <img
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      src={item?.img[0]}
                      alt="productImage"
                    />
                  </ListItemIcon>
                  <Box sx={{
                    color: '#011d71',
                    fontWeight: '500',
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: { xs: '12px', sm: '14px' },
                    pr: '2px'
                  }}
                  >{item.name}
                  </Box>
                </Stack>
              </NavLink>
            ))
              : (
                <Box sx={{ margin: 'auto',
                  fontFamily: 'Roboto, sans-serif',
                  textAlign: 'center',
                  fontSize: '16px',
                  color: '#011d71' }}
                >За даним запитом нічого не знайдено. Уточніть свій запит.
                </Box>
              )}
          </Stack>
        </Box>
      )}
      {text !== '' && (
      <ClearIcon
        onClick={() => { setText(''); }}
        sx={{ position: 'absolute', right: '4px', top: '8px', cursor: 'pointer', color: '#2fd3ae' }}
      />
      )}
    </Search>
  );
};

export default SearchActions;
