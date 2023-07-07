import { sendRequest } from '../../tools/sendRequest';

export const updateRating = async (productItem, newValue) => {

  try {
    const urlProductData = `${process.env.VITE_API_URL}/api/product/${productItem.id}`;
    const findProductData = await sendRequest(urlProductData);
    const reviewData = findProductData.data;

    const newProductData = {
      ratingTotal: reviewData.ratingTotal + newValue,
      ratingClick: reviewData.ratingClick + 1
    }
    const urlPutProductData = `${process.env.VITE_API_URL}/api/product/${productItem.id}`;
    const updateProductData = await sendRequest(urlPutProductData, 'PUT', newProductData);

    return updateProductData.data;
    
  } catch (err) {
    console.error('Error fetching products:', err);
  }
};
