import {
  getProductById,
  getAllProducts,
  updateProduct,
  deleteProduct,
} from './ProductDataAccess.js';

export const fillFields = async orderData => {
  try {
    const { products } = orderData;
    const productsData = await Promise.all(
      products.map(async item => {
        const { price, name, img } = await getProductById(item.id);

        const priceTotal = item.quantity * price;
        return { ...item, priceTotal, price, name, img: [...img] };
      })
    );

    return productsData;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAllProductsService = async searchString => {
  try {
    return await getAllProducts(searchString);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getOneProductService = async id => {
  try {
    return await getProductById(id);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateProductService = async (id, updatedFields) => {
  try {
    return await updateProduct(id, updatedFields);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteProductService = async id => {
  try {
    const prod = await deleteProduct(id);
    if (!prod) {
      throw new Error('ID was not found or already deleted');
    }
    return prod;
  } catch (error) {
    throw new Error(error.message);
  }
};
