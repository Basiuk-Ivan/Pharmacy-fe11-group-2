import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Pagination, Box, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';

import ProductCard from '../components/ProductCard/ProductCard';

import Filter from '../components/PageProducts/Filter';
import ChoiceCategory from '../components/PageProducts/ChoiceCategory';
import PromoMonth from '../components/PageProducts/PromoMonth';
import YouBrowsed from '../components/PageProducts/YouBrowsed';
import { fetchPosts } from '../redux/productsSlice';
import {Link} from "react-router-dom";

function Products() {
  // const { products, status, err } = useSelector(state => state.products);
  const { products } = useSelector(state => state.products);
  const totalPage = Math.ceil(products.length / 4);
  const [numPage, setNumPage] = useState(1);
  const [viewCards, setViewCards] = useState(products.slice(0, 4));
  const [price, setPrice] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    setPrice(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch, products.length]);

  useEffect(() => {
    setViewCards(products.slice((numPage - 1) * 4, ((numPage - 1) * 4) + 4));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numPage]);

  return (
    <Container
      sx={{
        width: 1200,
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Roboto'
      }}
    >

      <Box
        id="categoryCurrent"
        sx={{
          marginBottom: '68px',
          color: '#394045',
          fontSize: '36px',
          fontWeight: '700',
        }}
      >
        Ліки від кашлю, застуди та грипу
      </Box>

      <Box
        id="generalWrapper"
        sx={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >

        <Box
          id="aside&CardsWrapper"
          sx={{
            display: 'flex',
            gap: '30px'
          }}
        >

          <Box
            id="asideWrapper"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minWidth: '206px'
            }}
          >
            <ChoiceCategory />
            <Filter />
          </Box>

          <Box
            id="sorting&CardsWrapper"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minWidth: '914px'
            }}
          >

            <Box
              id="sortingWrapper"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: '#F7FAFB',
                marginBottom: '25px'
              }}
            >

              <Box
                id="sorting"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '40px',
                  paddingLeft: '20px'
                }}
              >

                <Box
                  id="sortingTitle"
                  sx={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: '#333333'
                  }}
                >
                  СОРТУВАТИ ПО ЦІНІ
                </Box>

                <Box
                  id="sortingTitlePriceWrapper"
                  sx={{
                    display: 'flex',
                    color: '#2fd3ae',
                    alignItems: 'center'
                  }}
                >

                  <Box
                    id="sortingTitlePriceIcon"
                    sx={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <SortIcon />
                  </Box>

                  <FormControl size="small" sx={{ m: 1, minWidth: 200, border: 'none' }}>
                    <InputLabel id="demo-simple-select-label">Ціна</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={price}
                      label="Ціна"
                      onChange={handleChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Спочатку дешевші</MenuItem>
                      <MenuItem value={20}>Спочатку дорожчі</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

              </Box>

              <Box
                id="paginationUpWrapper"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  paddingRight: '20px'
                }}
              >
                <Pagination
                  count={totalPage}
                  page={numPage}
                  color="primary"
                  variant="outlined"
                  shape="rounded"
                  hidePrevButton
                  hideNextButton
                  boundaryCount={2}
                  siblingCount={1}
                  onChange={(_, num) => setNumPage(num)}
                />
              </Box>
            </Box>

            <Box
              id="cardsWrapper"
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '30px',
                marginBottom: '30px'
              }}
            >

              {viewCards.map(item => (
                  <Link key={item.id} to={`/products/${item.id}`}>
                      <Box
                          id="cardWrapper"
                          key={item.id}
                          sx={{
                              width: '206px',
                              minHeight: '300px',
                              backgroundColor: '#c4c2cc',
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              fontSize: 24,
                              fontWeight: 600,
                              cursor: 'pointer'
                          }}
                      >
                          <ProductCard productItem={item} />
                      </Box>
                  </Link>

              ))}
            </Box>

            <Box
              id="paginationDownWrapper"
              sx={{
                backgroundColor: '#F7FAFB',
                paddingLeft: '20px'
              }}
            >
              <Pagination
                count={totalPage}
                page={numPage}
                color="primary"
                variant="outlined"
                shape="rounded"
                hidePrevButton
                hideNextButton
                boundaryCount={2}
                siblingCount={2}
                onChange={(_, num) => setNumPage(num)}
              />
            </Box>
          </Box>
        </Box>

        <PromoMonth />
        <YouBrowsed />

      </Box>
    </Container>
  );
}

export default Products;
