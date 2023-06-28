import { Avatar, Box, Rating, Stack, Typography, Button } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { updateReviewDB } from '../../../utils/ActionsWithProduct/updateReviewDB';

const Review = ({ item }) => {
  const isAuth = useSelector(state => state.user.isAuth);
  const userId = useSelector(state => state.user.id);

  const [isEmotionClick, setIsEmotionClick] = useState(false);
  const [dateValue, setDateValue] = useState(null);
  const [clickLike, setClickLike] = useState(false);
  const [clickDisLike, setClickDisLike] = useState(false);
  const [itemLike, setItemLike] = useState(Number(item.countLike));
  const [itemDislike, setItemDisLike] = useState(Number(item.countDislike));

  useEffect(() => {
    if (isAuth) {
      const likeIndex = item.whoLike.findIndex(personID => personID === userId);
      const dislikeIndex = item.whoDislike.findIndex(personID => personID === userId);
      if (likeIndex !== -1 || dislikeIndex !== -1) {
        setIsEmotionClick(true);
      }
    }
  }, []);

  const formatDate = dateString => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('uk-UA', options);
  };

  useEffect(() => {
    const formattedDate = formatDate(item.createdAt);
    setDateValue(formattedDate);
  }, [item.createdAt]);

  const numericValue = parseInt(item.rating, 10);
  const handleClickLike = async () => {
    await updateReviewDB(item, userId, 'like');
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

  const handleClickDisLike = async () => {
    await updateReviewDB(item, userId, 'dislike');
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

  const manImg = 'https://res.cloudinary.com/dnagwfnl4/image/upload/v1687946115/man_d2ly7r.jpg';
  const womanImg = 'https://res.cloudinary.com/dnagwfnl4/image/upload/v1687946330/woman_pe6lhd.jpg';

  return (
    <Stack sx={{ mb: '40px', minWidth: '280px', border: '1px solid #A4CAD6FF', p: '10px', borderRadius: '20px' }}>
      <Stack flexWrap="wrap" direction="row" justifyContent="center" sx={{ mb: '20px', rowGap: '10px' }}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          sx={{ minWidth: '200px', flexGrow: 1, rowGap: '10px' }}
        >
          <Avatar
            alt="Remy Sharp"
            src={item.gender === 'male' ? manImg : womanImg}
            sx={{ width: 56, height: 56 }}
          />
          <Typography
            variant="p"
            component="p"
            gutterBottom
            sx={{ mb: '30px', fontSize: '18px', lineHeight: '18px', fontWeight: '500', mr: '10px' }}
          >
            {item.userName}
          </Typography>
          <Typography
            variant="p"
            component="p"
            gutterBottom
            sx={{ mb: '30px', fontSize: '18px', lineHeight: '18px', fontWeight: '500', mr: '10px' }}
          >
            {item.userSurname}
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
            {dateValue}
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
              <Button onClick={handleClickLike} disabled={!isAuth || isEmotionClick}>
                <ThumbUpIcon />
              </Button>
            ) : (
              <Button onClick={handleClickLike} disabled={!isAuth || isEmotionClick}>
                <ThumbUpOutlinedIcon />
              </Button>

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
              <Button onClick={handleClickDisLike} disabled={!isAuth || isEmotionClick}>
                <ThumbDownAltIcon />
              </Button>
            ) : (
              <Button onClick={handleClickDisLike} disabled={!isAuth || isEmotionClick}>
                <ThumbDownOutlinedIcon />
              </Button>
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
      <Box sx={{ textAlign: 'justify' }}>{item.reviewTxt}</Box>
    </Stack>
  );
};

export default Review;
