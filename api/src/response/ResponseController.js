import ResponseDB, {Response} from "./ResponseModel.js";
import mongoose from "mongoose";


export const createResponse = async (req, res) => {
    try {
        console.log(req.body);
        const createdResponse = await ResponseDB.create(req.body);
        console.log(createdResponse);
        res.json(createdResponse);
    } catch (e) {
        res.status(500).json(e.message);
    }
};

export const getResponse = async (req, res) => {
    try {
        const {page, limit} = req.query;
        const perPage = parseInt(limit) || 5;
        const skip = ((parseInt(page) || 1) - 1) * perPage;
        let allResponds = [];
        allResponds = await ResponseDB.find().sort({createdAt: -1});

        let responds = [];
        responds = await ResponseDB.find()
            .sort({createdAt: -1})
            .limit(perPage)
            .skip(skip)

        const valueRating = allResponds.reduce(
            (sum, response) => sum + Number(response.rating),
            0
        ) / allResponds.length;
        const roundedValueRating = Number(valueRating.toFixed(1));
        const respondsForHome = allResponds.slice(0, 3);

        const totalFound = await ResponseDB.countDocuments();
        return res.json({totalFound, responds, roundedValueRating, respondsForHome})

    } catch (e) {
        res.status(500).json(e.message);
    }
};


// export const getResponse = async (req, res) => {
//     try {
//         let Responses = [];
//         Responses = await ResponseDB.find();
//
//         return res.json(Responses.reverse());
//     } catch (e) {
//         res.status(500).json(e.message);
//     }
// };


export const updateResponse = async (req, res) => {
    try {
        if (!req.body.id) {
            throw new Error('ID не знайдено');
        }
        const updatedResponse = await ResponseDB.findByIdAndUpdate(
            req.body.id,
            req.body,
            {new: true});
        return res.json(updatedResponse);
    } catch (e) {
        res.status(500).json(e.message);
    }
};
export const deleteResponse = async (req, res) => {
    try {
        if (!req.params.id) {
            throw new Error('ID не знайдено');
        }
        const Response = await ResponseDB.findByIdAndDelete(req.params.id);
        if (!Response) {
            res.status(404).json('ID не знайдено чи вже видалено');
        } else {
            return res.json(Response);
        }
    } catch (e) {
        res.status(500).json(e.message);
    }
};

export const ResponseController = {
    createResponse,
    getResponse,
    updateResponse,
    deleteResponse,
};
