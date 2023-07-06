import { useEffect, useState } from 'react';
import { Button, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { getResponsesFromDB } from '../../utils/Responses/getResponsesFromDB';
import Respond from './Respond';
import { theme } from '../../tools/muiTheme';
import { submitBtnStyles } from './style';

const RespondList = () => {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalFound, setTotalFound] = useState(0);
  const changeStateReview = useSelector(state => state.user.changeStateReview);

  const fetchData = async pageData => {
    try {
      const res = await getResponsesFromDB(pageData);

      const { data } = await res;

      setReviews(prevReviews => [...prevReviews, ...data.responds]);
      setTotalFound(data.totalFound);
    } catch (error) {
      console.log('Error fetching products:', error);
      return null;
    }
  };

  const fetchDataReset = async pageDB => {
    try {
      const res = await getResponsesFromDB(pageDB);

      const { data } = await res;

      setReviews([...data.responds]);
      setTotalFound(data.totalFound);
    } catch (error) {
      console.log('Error fetching products:', error);
      return null;
    }
  };
  const loadMoreReviews = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    fetchData(page);
  }, [page]);

  useEffect(() => {
    setPage(1);
    fetchDataReset(1);
  }, [changeStateReview]);

  return (
    <ThemeProvider theme={theme}>
      <Stack
        sx={{ mt: '40px' }}
        direction="column"
        justifyContent="center"
      >
        {!!reviews && reviews.map((item, index) => (<Respond key={`${item.id}-${index}`} item={item} />))};
        {reviews.length < totalFound && (
          <Button variant="contained" color="primary" onClick={loadMoreReviews} sx={submitBtnStyles}>
            Завантажити ще
          </Button>
        )}
      </Stack>
    </ThemeProvider>
  );
};

export default RespondList;
