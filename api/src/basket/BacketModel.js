import mongoose from 'mongoose';
import { Backet } from './BasketSchema.js';

export default mongoose.model('BacketDB', Backet, 'backets');
