import { Avatar, Box, Rating, Stack, Typography } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { useState, useEffect } from 'react';

const Review = ({ item }) => {
  const [formattedDate, setFormattedDate] = useState(null);
  const [clickLike, setClickLike] = useState(false);
  const [clickDisLike, setClickDisLike] = useState(false);
  const [itemLike, setItemLike] = useState(Number(item.countLike));
  const [itemDislike, setItemDisLike] = useState(Number(item.countDislike));

  const numericValue = parseInt(item.rating, 10);
  const handleClickLike = () => {
    if (!clickLike && !clickDisLike) {
      setItemLike(prev => prev + 1);
      setClickLike(prev => !prev);
    } else if (!clickLike && clickDisLike) {
      setItemDisLike(prev => prev - 1);
      setClickDisLike(prev => !prev);
      setItemLike(prev => prev + 1);
      setClickLike(prev => !prev);
    } else if (clickLike) {
      setItemLike(prev => prev - 1);
      setClickLike(prev => !prev);
    }
  };

  const handleClickDisLike = () => {
    if (!clickDisLike && !clickLike) {
      setItemDisLike(prev => prev + 1);
      setClickDisLike(prev => !prev);
    } else if (!clickDisLike && clickLike) {
      setItemLike(prev => prev - 1);
      setClickLike(prev => !prev);
      setItemDisLike(prev => prev + 1);
      setClickDisLike(prev => !prev);
    } else if (clickDisLike) {
      setItemDisLike(prev => prev - 1);
      setClickDisLike(prev => !prev);
    }
  };

  const setDate = someDate => {
    const date = new Date(Number(someDate));
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const currentDate = `${day}.${month}.${year}`;
    setFormattedDate(currentDate);
  };

  useEffect(() => {
    setDate(item.dateReview);
  }, [item.dateReview]);

  return (
    <Stack sx={{ mb: '40px', minWidth: '280px' }}>
      <Stack flexWrap="wrap" direction="row" justifyContent="center" sx={{ mb: '20px', rowGap: '10px' }}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ minWidth: '200px', flexGrow: 1, rowGap: '10px' }}
        >
          <Avatar alt="Remy Sharp" src={item.icon} sx={{ width: 56, height: 56 }} />
          <Typography
            variant="p"
            component="p"
            gutterBottom
            sx={{ mb: '30px', fontSize: '18px', lineHeight: '18px', fontWeight: '500', mr: '10px' }}
          >
            {item.authorName}
          </Typography>
        </Stack>
        <Stack
          flexWrap="wrap"
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ minWidth: '200px', paddingRight: '10px', flexGrow: 1, rowGap: '10px' }}
        >
          <Rating name="read-only" value={numericValue} readOnly />
          <Typography
            variant="p"
            component="p"
            gutterBottom
            sx={{ mb: '30px', fontSize: '18px', lineHeight: '18px', fontWeight: '500', mr: '10px' }}
          >
            {formattedDate}
          </Typography>
        </Stack>
        <Stack
          flexWrap="wrap"
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ minWidth: '200px', paddingRight: '10px', flexGrow: 1, rowGap: '10px' }}
        >
          <Stack direction="row" spacing={2} alignItems="center" sx={{ cursor: 'pointer' }}>
            {clickLike ? (
              <ThumbUpIcon onClick={handleClickLike} />
            ) : (
              <ThumbUpOutlinedIcon onClick={handleClickLike} />
            )}
            <Typography
              variant="p"
              component="p"
              gutterBottom
              sx={{ fontSize: '16px', lineHeight: '16px', fontWeight: '400' }}
            >
              {itemLike}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ cursor: 'pointer' }}>
            {clickDisLike ? (
              <ThumbDownAltIcon onClick={handleClickDisLike} />
            ) : (
              <ThumbDownOutlinedIcon onClick={handleClickDisLike} />
            )}
            <Typography
              variant="p"
              component="p"
              gutterBottom
              sx={{ fontSize: '16px', lineHeight: '16px', fontWeight: '400' }}
            >
              {itemDislike}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Box sx={{ textAlign: 'justify' }}>{item.mainText}</Box>
    </Stack>
  );
};

export default Review;
