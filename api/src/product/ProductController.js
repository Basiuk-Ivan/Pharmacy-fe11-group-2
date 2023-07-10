import { createProduct } from './ProductDataAccess.js';
import {
  getAllProductsService,
  getOneProductService,
  updateProductService,
  deleteProductService,
} from './ProductService.js';

export const createProductController = async (req, res) => {
  try {
    const prod = await createProduct(req.body);
    res.json(prod);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getAllProductController = async (req, res) => {
  try {
    const searchString = req.query;
    const { totalFound, data } = await getAllProductsService(searchString);
    res.json({ totalFound, data });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getOneProductController = async (req, res) => {
  try {
    const oneProd = await getOneProductService(req.params.id);
    return res.json(oneProd);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const updateProductController = async (req, res) => {
  try {
    const updatedFields = { ...req.body };
    const updatedProd = await updateProductService(
      req.params.id,
      updatedFields
    );
    return res.json(updatedProd);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const prod = await deleteProductService(req.params.id);
    return res.json(prod);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const ProductController = {
  createProductController,
  getAllProductController,
  getOneProductController,
  updateProductController,
  deleteProductController,
};
