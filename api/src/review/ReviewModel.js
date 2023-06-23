import mongoose from 'mongoose';

export const Review = new mongoose.Schema(
  {
    product: { type: mongoose.Types.ObjectId, ref: 'ProductDB' },
    user: { type: mongoose.Types.ObjectId, ref: 'UserDB' },
    reviewTxt: String,
  },
  {
    timestamps: false,
    versionKey: false,
    id: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

export default mongoose.model('ReviewDB', Review, 'reviews');
