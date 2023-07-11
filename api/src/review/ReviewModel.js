import mongoose from 'mongoose';
import { Review } from './ReviewSchema.js';

export default mongoose.model('ReviewDB', Review, 'reviews');
