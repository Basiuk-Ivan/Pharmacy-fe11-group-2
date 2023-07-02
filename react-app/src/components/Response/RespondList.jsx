import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { getResponsesFromDB } from '../../utils/Responses/getResponsesFromDB';
import Respond from './Respond';

const RespondList = () => {
  const [responses, setResponses] = useState([]);
  const changeStateReview = useSelector(state => state.user.changeStateReview);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getResponsesFromDB();

        const { data } = await res;
        setResponses(data);
      } catch (error) {
        console.log('Error fetching products:', error);
        return null;
      }
    };
    fetchData();
  }, [changeStateReview]);

  return (
    <Box sx={{ mt: '40px' }}>
      {!!responses && responses.map((item, index) => <Respond key={index} item={item} />)}
    </Box>
  );
};

export default RespondList;
