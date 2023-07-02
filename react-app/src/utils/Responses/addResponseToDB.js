import { sendRequest } from '../../tools/sendRequest';

export const addResponseToDB = async (review, userID, userGender) => {
  try {
    const responseData = {
      user: userID,
      responseTxt: review.reviewTxt,
      rating: review.rating,
      userName: review.name,
      userSurname: review.surname,
      gender: userGender,
      countLike: 0,
      countDislike: 0,
      whoLike: [],
      whoDislike: []
    };

    const url = `${process.env.VITE_API_URL}/api/response`;
    const createResponse = await sendRequest(url, 'POST', responseData);

    // if (!createReviewResponse.statusText) {
    //   throw new Error('Network response was not ok');
    // }
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};
