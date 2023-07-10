import ProductDB from './ProductModel.js';

export const createProduct = async data => {
  try {
    return await ProductDB.create(data);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getProductById = async id => {
  try {
    return await ProductDB.findById(id);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAllProducts = async searchString => {
  try {
    const { page, limit, priceMin, priceMax, sort, ...searchParams } =
      searchString;
    const perPage = parseInt(limit) || 8;
    const skip = ((parseInt(page) || 1) - 1) * perPage;
    const minPrice = parseInt(priceMin) || 0;
    const maxPrice = parseInt(priceMax) || 9007199254740992;
    const sortStr = sort || '1';
    searchParams.price = { $gte: minPrice, $lte: maxPrice };
    if (!!searchParams.country) {
      searchParams.country = { $in: searchParams.country?.split(',') };
    }
    if (!!searchParams.productForm) {
      searchParams.productForm = {
        $in: searchParams.productForm?.split(','),
      };
    }
    if (!!searchParams._id) {
      let searchTxt = searchParams._id?.toString();
      searchParams._id = { $in: searchTxt.split(',') };
    }
    if (searchParams.search) {
      const regexp = new RegExp(searchParams.search, 'i');
      searchParams.name = regexp;
      delete searchParams.search;
    }
    const data = await ProductDB.find(searchParams)
      .limit(perPage)
      .skip(skip)
      .sort({ price: sortStr });
    const totalFound = await ProductDB.countDocuments(searchParams);

    return { totalFound, data };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateProduct = async (id, updatedFields) => {
  try {
    return await ProductDB.findByIdAndUpdate(id, updatedFields, { new: true });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteProduct = async id => {
  try {
    return await ProductDB.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error.message);
  }
};
