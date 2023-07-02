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
        let Responses = [];
          Responses = await ResponseDB.find();

        return res.json(Responses.reverse());
    } catch (e) {
        res.status(500).json(e.message);
    }
};

export const updateResponse = async (req, res) => {
    try {
        if (!req.body.id) {
            throw new Error('ID не знайдено');
        }
        const updatedResponse = await ResponseDB.findByIdAndUpdate(req.body.id, req.body, { new: true });
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
