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
        const { page, limit, priceMin, priceMax, sort,...searchString } = req.query;
        const perPage = parseInt(limit) || 20;
        const skip = ((parseInt(page) || 1) - 1) * perPage;
        const minPrice = parseInt(priceMin) || 0;
        const maxPrice = parseInt(priceMax) || 9007199254740992;
        const sortPrice = parseInt(priceMin) || 0;
        searchString.price = { $gte: minPrice, $lte: maxPrice };
console.log(searchString);
        const totalFound = await ProductDB.countDocuments(searchString);
        const prods = await ProductDB.find( searchString )
            .limit(perPage)
            .skip(skip)
            .sort({'price': 1 });

        return res.json({totalFound, prods});
    } catch (e) {
        res.status(500).json(e.message);
    }
};


const updateProduct = async (req, res) => {
    try {
        const updatedProd = await ProductDB.findByIdAndUpdate(req.id, req, { new: true });
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
