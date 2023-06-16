import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';

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
            zIndex: '2',
            width: '310px',
            maxWidth: 360,
            bgcolor: '#eaeaea',
            overflowY: 'auto',
            maxHeight: 220
          }}
        >
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {products.map(item => (
                    <Box key={item.id} sx={{ display: 'flex', gap: '10px' }}>
                      <ListItemIcon sx={{ width: '70px', height: '100px' }}>
                        <img
                          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                          src={item?.img[0]}
                          alt="productImage"
                        />
                      </ListItemIcon>
                      <Box>{item.name}</Box>
                    </Box>
                  ))}
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
          <Divider />
        </Box>
      )}
    </Search>
  );
};

export default SearchActions;
