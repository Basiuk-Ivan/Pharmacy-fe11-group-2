import { sendRequest } from '../../tools/sendRequest';

export const getResponsesFromDB = async (reqPage, reqLimit = 5) => {
  try {
    const url = `${process.env.VITE_API_URL}/api/response?page=${reqPage}&limit=${reqLimit}`;
    const getResponses = await sendRequest(url);
    // if (!createReviewResponse.statusText) {
    //   throw new Error('Network response was not ok');
    // }

    return getResponses;
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};
