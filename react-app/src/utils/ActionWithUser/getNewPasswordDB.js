import { sendRequest } from '../../tools/sendRequest';

export const getNewPasswordDB = async userEmail => {
  try {
    const url = `${process.env.VITE_API_URL}/api/users/password?email=${userEmail}`;
    const createReviewResponse = await sendRequest(url, 'POST', {});
    if (!createReviewResponse.statusText) {
      throw new Error('Network response was not ok');
    }

    return createReviewResponse;
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};
