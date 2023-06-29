import { sendRequest } from '../../tools/sendRequest';

export const getNewPasswordDB = async userEmail => {
  try {
    const url = `http://localhost:3004/api/users/password?email=${userEmail}`;
    const createReviewResponse = await sendRequest(url, 'POST', {});
    if (!createReviewResponse.statusText) {
      throw new Error('Network response was not ok');
    }

    return createReviewResponse;
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};
