import { Box, Typography, Rating, Stack, Skeleton } from '@mui/material';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import RespondForm from './RespondForm';
import RespondList from './RespondList';
import {
  ave,
  aveRate,
  aveText,
  mainFeedback,
  respondSectionStyles,
  respondTitleStyles,
  StarRate,
  totalRate,
  warningUserStyles,
  wrapperForTestimonials,
} from './style';
import { getResponsesFromDB } from '../../utils/Responses/getResponsesFromDB';

const RespondBlock = () => {
  const isAuth = useSelector(state => state.user.isAuth);
  const [averageRating, setAverageRating] = useState(4.5);
  const [totalFound, setTotalFound] = useState();
  const changeStateReview = useSelector(state => state.user.changeStateReview);
  const [showSkeleton, setShowSkeleton] = useState(true);

  const fetchData = async () => {
    try {
      const res = await getResponsesFromDB(1);
      const { data } = await res;
      setAverageRating(data.roundedValueRating);
      setTotalFound(data.totalFound);
    } catch (error) {
      console.log('Error fetching products:', error);
      return null;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetchData();
  }, [changeStateReview]);

  return (
    <Box>
      <Box sx={wrapperForTestimonials}>
        {showSkeleton ? (
          <Stack direction="column" spacing={2}>
            <Skeleton variant="rectangular" width={270} height={300} />
          </Stack>
        ) :
          (<Box sx={mainFeedback}>
            <Box sx={ave}>
              <Typography fontFamily="Roboto" component="div" sx={aveText}>
                Середня <br /> оцінка <br /> аптеки
              </Typography>
              <Box>
                <Typography fontFamily="Roboto" component="div" sx={aveRate}>
                  {averageRating}
                </Typography>
                <Rating name="half-rating" value={averageRating} sx={StarRate} readOnly precision={0.5} />
              </Box>
            </Box>
            <Typography fontFamily="Roboto" component="div" sx={totalRate}>
              Загальний рейтинг на основі  <br /> {totalFound} відгуків наших покупців
            </Typography>
          </Box>)}
      </Box>
      <Box sx={respondSectionStyles} noValidate autoComplete="off">

        {isAuth &&
        <Box>
          <Typography variant="h5" component="h5" gutterBottom sx={respondTitleStyles}>
            Залишити відгук
          </Typography>
          <RespondForm />
        </Box>}

        {!isAuth &&
        <Typography variant="h4" component="h4" gutterBottom sx={warningUserStyles}>
          Додати відгук може лише авторизований користувач
        </Typography>}
        <RespondList />
      </Box>
    </Box>);
};
export default RespondBlock;
