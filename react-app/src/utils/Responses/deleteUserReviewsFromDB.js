import { sendRequest } from '../../tools/Axios/sendRequest';

export const deleteUserReviewsFromDB = async review => {
  try {
    
    const urlData = `${process.env.VITE_API_URL}/api/review/${review.id}`;
    const findActualRespondData = await sendRequest(urlData, 'DELETE', {});

    // if (!updateReviewResponse.statusText) {
    //   throw new Error('Network response was not ok');
    // }
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};
