import mongoose from 'mongoose';
import ProductDB from './ProductModel.js';

const createProduct = async (req, res) => {
  try {
    const prod = await ProductDB.create(req.body);
    res.json(prod);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

const getOneProd = async (id, res) => {
  try {
    const oneProd = await ProductDB.findById(id);
    return oneProd;
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const fillFields = async (orderData, res) => {
  try {
    const { products } = orderData;
    const productsData = await Promise.all(
      products.map(async item => {
        const { price, name, img } = await getOneProd(item.id);

        const priceTotal = item.quantity * price;
        return { ...item, priceTotal, price, name, img: [...img] };
      })
    );

    return productsData;
  } catch (e) {
    res.status(500).json(e.message);
  }
};

const getAllProduct = async (req, res) => {
  try {
    const { page, limit, priceMin, priceMax, sort, ...searchString } =
      req.query;
    const perPage = parseInt(limit) || 8;
    const skip = ((parseInt(page) || 1) - 1) * perPage;
    const minPrice = parseInt(priceMin) || 0;
    const maxPrice = parseInt(priceMax) || 9007199254740992;
    const sortStr = sort || '1';
    searchString.price = { $gte: minPrice, $lte: maxPrice };
    if (!!searchString.country) {
      searchString.country = { $in: searchString.country?.split(',') };
    }
    if (!!searchString.productForm) {
      searchString.productForm = { $in: searchString.productForm?.split(',') };
    }
    if (!!searchString._id) {
      let searchTxt = searchString._id?.toString();
      searchString._id = { $in: searchTxt.split(',') };
    }
    if (searchString.search) {
      const regexp = new RegExp(searchString.search, 'i');
      searchString.name = regexp;
      delete searchString.search;
    }
    const data = await ProductDB.find(searchString)
      .limit(perPage)
      .skip(skip)
      .sort({ price: sortStr });
    const totalFound = await ProductDB.countDocuments(searchString);

    return res.json({ totalFound, data });
  } catch (e) {
    res.status(500).json(e.message);
  }
};

const getOneProduct = async (req, res) => {
  try {
    const oneProd = await ProductDB.findById(req.params.id);
    return res.json(oneProd);
  } catch (e) {
    res.status(500).json(e.message);
  }
};

const updateProduct = async (req, res) => {
  try {
    const updatedFields = { ...req.body };
    const updatedProd = await ProductDB.findByIdAndUpdate(
      req.params.id,
      updatedFields,
      { new: true }
    );
    return res.json(updatedProd);
  } catch (e) {
    res.status(500).json(e.message);
  }
};
const deleteProduct = async (req, res) => {
  try {
    const prod = await ProductDB.findByIdAndDelete(req.params.id);
    if (!prod) {
      res.status(404).json('ID was not founded or already deleted');
    } else {
      return res.json(prod);
    }
  } catch (e) {
    res.status(500).json(e.message);
  }
};

export const ProductController = {
  createProduct,
  getAllProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
};
