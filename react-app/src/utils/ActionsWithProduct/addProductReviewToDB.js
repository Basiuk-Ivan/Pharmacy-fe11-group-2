import { sendRequest } from '../../tools/Axios/sendRequest';

export const addProductReviewToDB = async (review, productId, userID, userGender) => {
  try {
    const reviewData = {
      product: productId,
      user: userID,
      reviewTxt: review.reviewTxt,
      rating: review.rating,
      userName: review.name,
      userSurname: review.surname,
      gender: userGender,
      countLike: 0,
      countDislike: 0,
      whoLike: [],
      whoDislike: []
    };

    const url = `${process.env.VITE_API_URL}/api/review`;
    const createReviewResponse = await sendRequest(url, 'POST', reviewData);

    // if (!createReviewResponse.statusText) {
    //   throw new Error('Network response was not ok');
    // }
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};
