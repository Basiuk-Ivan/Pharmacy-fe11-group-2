import { useEffect, useState } from 'react';

import { Pagination, Box, Container } from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';

import { CardTest } from '../components/Categories/cardTest';
import { requestTest } from '../tools/requestTest';

import Filter from '../components/Categories/Filter';
import ChoiceCategory from '../components/Categories/ChoiceCategory';
import PromoMonth from '../components/Categories/PromoMonth';
import YouBrowsed from '../components/Categories/YouBrowsed';

const response = await requestTest('./drinks.json');
const totalPage = Math.ceil(response.length / 24);

const BlogPost = () => {
  const [numPage, setNumPage] = useState(1);
  const [viewCards, setViewCards] = useState(response.slice(0, 24));

  useEffect(() => {
    setViewCards(response.slice((numPage - 1) * 24, (numPage - 1) * 24 + 24));
  }, [numPage]);

  const wrap = {
    width: 1200,
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Roboto'
  };

  return (
    <Container sx={wrap}>
      <Box
        id="categoryCurrent"
        sx={{
          marginBottom: '68px',
          color: '#394045',
          fontSize: '36px',
          fontWeight: '700'
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
                  СОРТУВАТИ ПО
                </Box>

                <Box
                  id="sortingTitlePriceWrapper"
                  sx={{
                    display: 'flex',
                    color: '#71C476',
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

                  <Box
                    id="sortingTitlePrice"
                    sx={{
                      fontSize: '14px',
                      fontWeight: '700',
                      marginLeft: '8px'
                    }}
                  >
                    По ціні
                  </Box>
                </Box>

                <Box
                  id="sortingTitlePopular"
                  sx={{
                    fontSize: '14px',
                    fontWeight: '400',
                    color: '#828282'
                  }}
                >
                  По популярності
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
                <Box
                  id="cardWrapper"
                  key={item.id}
                  sx={{
                    width: '206px',
                    height: '300px',
                    backgroundColor: '#c4c2cc',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 24,
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  <CardTest id={item.id} name={item.name} price={item.price} />
                </Box>
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
};

export default BlogPost;
