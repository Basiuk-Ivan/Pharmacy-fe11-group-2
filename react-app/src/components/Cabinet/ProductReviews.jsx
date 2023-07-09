import { Avatar, Box, Rating, Stack, Typography, Button } from '@mui/material';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

import { NavLink } from 'react-router-dom';
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
  responseTextStyles, productNameStyles
} from './style';

import { request } from '../../tools/Axios/request.js';
import { avatarImg } from '../../utils/commonConstans/avatarImg.js';
import { formatDate } from '../../utils/ActionsWithProduct/formatDate.js';
import {deleteUserReviewsFromDB} from "../../utils/Responses/deleteUserReviewsFromDB.js";
import ModalWindow from "../ModalWindow/index.js";
import {changeStateReview, closeModalRemoveReview, openModalRemoveReview} from "../../redux/slice/userSlice.js";

const ProductReviews = ({ item }) => {

  const id = item.product;
  const [dateValue, setDateValue] = useState(null);
  const [product, setProduct] = useState(null);
  const isOpenModalRemoveReview = useSelector(state => state.user.isOpenModalRemoveReview);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { result } = await request({
          url: '',
          method: 'GET',
          params: { _id: id }
        });
        const { data } = result;
        if (data && data.length > 0) {
          const firstProduct = data[0];
          setProduct(firstProduct);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, []);

  useEffect(() => {
    const formattedDate = formatDate(item.createdAt);
    setDateValue(formattedDate);
  }, [item.createdAt]);

  const numericValue = parseInt(item.rating, 10);

  const openRemoveModal = (item) => {
    window.localStorage.setItem("deleteReview", JSON.stringify(item));
    dispatch(openModalRemoveReview());
  }
  const handleClickModalRemove = async () => {
    const reviewItem = JSON.parse(window.localStorage.getItem("deleteReview"));
    await deleteUserReviewsFromDB(reviewItem);
    dispatch(changeStateReview(reviewItem.reviewTxt));
    dispatch(closeModalRemoveReview());
  }
  const handleCloseModalRemove = () => {
    dispatch(closeModalRemoveReview());
  }



  return (
    <>
      {!!product &&

      <Stack sx={{ p: '10px', border: '1px solid green', mb: 2, borderRadius: '10px', position:'relative' }}>

        <Stack direction="row" alignItems="center" flexWrap="wrap" gap="10px" sx={{ mb: '10px' }}>
          <NavLink to={`/${product.categories[0]}/${product.id}`}>
            <Box component="img" src={product.img[0]} sx={{ width: '80px' }} />
          </NavLink>
          <NavLink to={`/${product.categories[0]}/${product.id}`}>
            <Typography variant="h6" component="p" sx={productNameStyles}>{product.name}</Typography>
          </NavLink>
        </Stack>

        <Stack sx={responseWrapperStyles}>
          <Stack sx={responseHeaderStyles}>
            <Stack direction="row" spacing={2} alignItems="center" sx={personalInfoStyles}>
              <Avatar
                alt="Remy Sharp"
                src={item.gender === 'male' ? avatarImg.manImg : avatarImg.womanImg}
                sx={avatarStyles}
              />
              <Typography variant="p" component="p" gutterBottom sx={nameStyles}>
                {item.userName} {item.userSurname}
              </Typography>
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

                <Button disabled>
                  <ThumbUpIcon />
                </Button>
                <Typography variant="p" component="p" gutterBottom sx={itemEmotionStyles}>
                  {item.countLike}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ cursor: 'pointer' }}>
                <Button disabled>
                  <ThumbDownAltIcon />
                </Button>
                <Typography variant="p" component="p" gutterBottom sx={itemEmotionStyles}>
                  {item.countDislike}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Box sx={responseTextStyles}>{item.reviewTxt}</Box>
        </Stack>


        <Button onClick={()=> openRemoveModal(item)} sx={{position:"absolute",top:"10px", right:"-10px", color:"#1d8da0"}}>
          <CloseSharpIcon/>
        </Button>
        <ModalWindow
            mainText="Видалити даний відгук?"
            confirmTextBtn="Підтвердити"
            cancelTextBtn="Відміна"
            handleClick={()=> handleClickModalRemove(item)}
            handleClose={handleCloseModalRemove}
            isOpened={isOpenModalRemoveReview}
            actions
        />
      </Stack>}

    </>

  );
};

export default ProductReviews;
