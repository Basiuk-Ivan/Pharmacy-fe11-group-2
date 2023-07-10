import mongoose from 'mongoose';

export const Favorite = new mongoose.Schema(
  {
    products: [{ type: mongoose.Types.ObjectId, ref: 'ProductDB' }],
    user: { type: mongoose.Types.ObjectId, ref: 'UserDB' },
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
        delete ret.password;
      },
    },
  }
);
