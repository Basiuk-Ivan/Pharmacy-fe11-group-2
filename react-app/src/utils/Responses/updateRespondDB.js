import { sendRequest } from '../../tools/sendRequest';

export const updateRespondDB = async (reviewData, userId, emotion) => {
  console.log(reviewData)
  try {
    let newReviewData = {};

    if (emotion === 'like') {
      let updatedWhoLike = [];
      if (reviewData.whoLike.length > 0) {
        updatedWhoLike = [...reviewData.whoLike];
      }
      updatedWhoLike.push(userId);
      newReviewData = {
        id: reviewData.id,
        countLike: reviewData.countLike + 1,
        whoLike: [...updatedWhoLike]
      };
    } else {
      let updatedWhoDislike = [];
      if (reviewData.whoDislike.length > 0) {
        updatedWhoDislike = [...reviewData.whoDislike];
      }
      updatedWhoDislike.push(userId);
      newReviewData = {
        id: reviewData.id,
        countDislike: reviewData.countDislike + 1,
        whoDislike: [...updatedWhoDislike]
      };
    }

    const url = `${process.env.VITE_API_URL}/api/response`;
    const updateReviewResponse = await sendRequest(url, 'PUT', newReviewData);

    // if (!updateReviewResponse.statusText) {
    //   throw new Error('Network response was not ok');
    // }
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};
