import ProductDB from './ProductModel.js';

const createProduct = async (req, res) => {
    try {
        const prod = await ProductDB.create(req.body);
        res.json(prod);
    } catch (e) {
        res.status(500).json(e.message);
    }
};

const getAllProduct = async (req, res) => {
    try {
        const  category  = req.query;

        const prods = await ProductDB.find( category );
        return res.json(prods);
    } catch (e) {
        res.status(500).json(e.message);
    }
};


const updateProduct = async (req, res) => {
    try {
        const updatedProd = await ProductDB.findByIdAndUpdate(req.id, req, { new: true });;
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
    updateProduct,
    deleteProduct,
};
