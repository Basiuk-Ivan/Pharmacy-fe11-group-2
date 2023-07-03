import React, { useEffect, useState } from 'react';
import {Box, Button, Stack} from '@mui/material';
import { useSelector } from 'react-redux';
import { getResponsesFromDB } from '../../utils/Responses/getResponsesFromDB';
import Respond from './Respond';
import {ThemeProvider} from "@mui/material/styles";
import { theme } from '../../tools/muiTheme';

const RespondList = () => {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalFound, setTotalFound] = useState(0);
  const changeStateReview = useSelector(state => state.user.changeStateReview);

  const fetchData = async (page, limit) => {
    try {
      const res = await getResponsesFromDB(page, limit);

      const { data } = await res;

      setReviews((prevReviews) => [...prevReviews, ...data.responds]);
      setTotalFound(data.totalFound);
    } catch (error) {
      console.log('Error fetching products:', error);
      return null;
    }
  };


  const fetchDataReset = async (page, limit) => {
    try {
      const res = await getResponsesFromDB(page, limit);

      const { data } = await res;

      setReviews([...data.responds]);
      setTotalFound(data.totalFound);
    } catch (error) {
      console.log('Error fetching products:', error);
      return null;
    }
  };
  const loadMoreReviews = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchData(page, limit);
  }, [page, limit]);

  useEffect(() => {
    setPage(1);
    fetchDataReset(1, limit);
  }, [changeStateReview]);

  return (
      <ThemeProvider theme={theme}>
    <Stack sx={{ mt: '40px' }} direction="column"
           justifyContent="center">
      {!!reviews && reviews.map((item, index) => <Respond key={index} item={item} />)}
      {reviews.length < totalFound && (
          <Button
              variant="contained"
              color="primary"
              onClick={loadMoreReviews}
              sx={{
                padding: '18px 61px',
                fontSize: '12px',
                color: '#ffffff',
                fontWeight: '700',
                borderRadius: '50px',
                maxWidth:'250px',
                alignSelf:'center'
              }}
          >
            Завантажити ще
          </Button>
      )}
    </Stack>
      </ThemeProvider>
  );
};

export default RespondList;
