import mongoose from 'mongoose';
import { Favorite } from './FavoriteSchema.js';

export default mongoose.model('FavoriteDB', Favorite, 'favorites');
