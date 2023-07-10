import mongoose from 'mongoose';
import { Order } from './OrderSchema.js';

export default mongoose.model('OrderDB', Order, 'orders');
