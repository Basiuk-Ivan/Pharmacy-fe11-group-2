import CategoryDB from "./CategoriesModel.js";

export const createCategory = async (req, res) => {
    try {
        const createdCategory = await CategoryDB.create(req.body);
        res.json(createdCategory);
    } catch (e) {
        res.status(500).json(e.message);
    }
};

export const getAllCategory = async (req, res) => {
    try {
        const {category} = req.query;
        let categories = [];
        if (!!category) {
            categories = await CategoryDB.find({ parentId : category });
        } else {
            categories = await CategoryDB.find();
        }
        return res.json(categories);
    } catch (e) {
        res.status(500).json(e.message);
    }
};

export const updateCategory = async (req, res) => {
    try {
        if (!req.body.id) {
            throw new Error('ID was not set');
        }
        const updatedCategory = await CategoryDB.findByIdAndUpdate(req.body.id, req.body, { new: true });
        return res.json(updatedCategory);
    } catch (e) {
        res.status(500).json(e.message);
    }
};
export const deleteCategory = async (req, res) => {
    try {
        if (!req.params.id) {
            throw new Error('ID was not set');
        }
        const category = await CategoryDB.findByIdAndDelete(req.params.id);
        if (!category) {
            res.status(404).json('ID was not founded or already deleted');
        } else {
            return res.json(category);
        }
    } catch (e) {
        res.status(500).json(e.message);
    }
};

export const CategoriesController = {
    createCategory,
    getAllCategory,
    updateCategory,
    deleteCategory,
};
