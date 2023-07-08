import { sendRequest } from '../../tools/Axios/sendRequest';

export const updateReviewDB = async (id, userId, emotion) => {
  try {
    let newReviewData = {};

    const urlData = `${process.env.VITE_API_URL}/api/review?respondId=${id}`;
    const findActualRespondData = await sendRequest(urlData);
    const reviewData = findActualRespondData.data;

    if (emotion === 'like') {
      const updatedWhoLike = [...reviewData.whoLike];
      updatedWhoLike.push(userId);
      newReviewData = {
        id: reviewData.id,
        countLike: reviewData.countLike + 1,
        whoLike: [...updatedWhoLike]
      };
    } else {
      const updatedWhoDislike = [...reviewData.whoDislike];
      updatedWhoDislike.push(userId);
      newReviewData = {
        id: reviewData.id,
        countDislike: reviewData.countDislike + 1,
        whoDislike: [...updatedWhoDislike]
      };
    }

    const url = `${process.env.VITE_API_URL}/api/review`;
    const updateReviewResponse = await sendRequest(url, 'PUT', newReviewData);

    // if (!updateReviewResponse.statusText) {
    //   throw new Error('Network response was not ok');
    // }
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};
