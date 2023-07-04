import { Router } from 'express';
import {ResponseController} from './ResponseController.js';
import {Response} from "./ResponseModel.js";


export const responseRouter = new Router();
export const responseDefaultPath = '/api/response';

responseRouter.post('/', ResponseController.createResponse);
responseRouter.get('/', ResponseController.getResponse);
responseRouter.put('/', ResponseController.updateResponse);
responseRouter.delete('/:id', ResponseController.deleteResponse);