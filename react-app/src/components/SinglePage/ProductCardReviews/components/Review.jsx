import { Avatar, Box, Rating, Stack, Typography, Button } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { updateReviewDB } from '../../../../utils/ActionsWithProduct/updateReviewDB';
import { formatDate } from '../../../../utils/ActionsWithProduct/formatDate';
import {
  responseWrapperStyles,
  responseHeaderStyles,
  personalInfoStyles,
  avatarStyles,
  nameStyles,
  ratingBlockStyles,
  dateStyles,
  emotionBlockStyles,
  itemEmotionStyles,
  responseTextStyles
} from '../style';
import { avatarImg } from '../../../../utils/commonConstans/avatarImg';

const Review = ({ item }) => {
  const isAuth = useSelector(state => state.user.isAuth);
  const userId = useSelector(state => state.user.id);

  const [isEmotionClick, setIsEmotionClick] = useState(false);
  const [dateValue, setDateValue] = useState(null);
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

  useEffect(() => {
    const formattedDate = formatDate(item.createdAt);
    setDateValue(formattedDate);
  }, [item.createdAt]);

  const numericValue = parseInt(item.rating, 10);
  const handleClickLike = async () => {
    await updateReviewDB(item.id, userId, 'like');
    setItemLike(prev => prev + 1);
    setIsEmotionClick(true);
  };

  const handleClickDisLike = async () => {
    await updateReviewDB(item.id, userId, 'dislike');
    setItemDisLike(prev => prev + 1);
    setIsEmotionClick(true);
  };

  return (
    <Stack sx={responseWrapperStyles}>
      <Stack sx={responseHeaderStyles}>
        <Stack direction="row" spacing={2} alignItems="center" sx={personalInfoStyles}>
          <Avatar
            alt="Remy Sharp"
            src={item.gender === 'male' ? avatarImg.manImg : avatarImg.womanImg}
            sx={avatarStyles}
          />
          <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={0.5} flexWrap="wrap">
            <Typography variant="p" component="p" gutterBottom sx={nameStyles}>
              {item.userName}
            </Typography>
            <Typography variant="p" component="p" gutterBottom sx={nameStyles}>
              {item.userSurname}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          flexWrap="wrap"
          direction="row"
          spacing={1}
          alignItems="center"
          sx={ratingBlockStyles}
        >
          <Rating name="read-only" value={numericValue} readOnly />
          <Typography variant="p" gutterBottom sx={dateStyles}>
            {dateValue}
          </Typography>
        </Stack>
        <Stack
          flexWrap="wrap"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={emotionBlockStyles}
        >
          <Stack direction="row" spacing={2} alignItems="center" sx={{ cursor: 'pointer' }}>
            {isEmotionClick && (
              <Button onClick={handleClickLike} disabled={!isAuth || isEmotionClick}>
                <ThumbUpIcon />
              </Button>
            )}
            {!isEmotionClick && (
              <Button onClick={handleClickLike} disabled={!isAuth || isEmotionClick}>
                <ThumbUpOutlinedIcon />
              </Button>
            )}
            <Typography variant="p" component="p" gutterBottom sx={itemEmotionStyles}>
              {itemLike}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ cursor: 'pointer' }}>
            {isEmotionClick && (
              <Button onClick={handleClickDisLike} disabled={!isAuth || isEmotionClick}>
                <ThumbDownAltIcon />
              </Button>
            )}
            {!isEmotionClick && (
              <Button onClick={handleClickDisLike} disabled={!isAuth || isEmotionClick}>
                <ThumbDownOutlinedIcon />
              </Button>
            )}
            <Typography variant="p" component="p" gutterBottom sx={itemEmotionStyles}>
              {itemDislike}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Box sx={responseTextStyles}>{item.reviewTxt}</Box>
    </Stack>
  );
};

export default Review;
