import { sendRequest } from '../../tools/sendRequest';

export const getProductReviewsFromDB = async productId => {
  try {
    const url = `${process.env.VITE_API_URL}/api/review?product=${productId}`;
    const createReviewResponse = await sendRequest(url);
    // if (!createReviewResponse.statusText) {
    //   throw new Error('Network response was not ok');
    // }

    return createReviewResponse;
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};
