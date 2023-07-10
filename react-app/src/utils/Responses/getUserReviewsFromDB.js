import { sendRequest } from '../../tools/Axios/sendRequest';

export const getUserReviewsFromDB = async userId => {
  try {
    const urlData = `${process.env.VITE_API_URL}/api/review?user=${userId}`;
    const findActualRespondData = await sendRequest(urlData);
    const reviewData = findActualRespondData;

    return reviewData;
    // if (!updateReviewResponse.statusText) {
    //   throw new Error('Network response was not ok');
    // }
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};
