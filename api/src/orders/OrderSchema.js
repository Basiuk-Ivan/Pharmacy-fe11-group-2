import mongoose from 'mongoose';

const product = new mongoose.Schema(
  {
    productID: { type: mongoose.Types.ObjectId, ref: 'ProductDB' },
    name: String,
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    priceTotal: { type: Number },
    img: { type: Array },
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

export const Order = new mongoose.Schema(
  {
    orderStatus: String,
    totalPrice: Number,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    city: String,
    street: String,
    house: String,
    orderPaid: Boolean,
    products: [product],
    user: { type: mongoose.Types.ObjectId, ref: 'UserDB' },
  },
  {
    timestamps: true,
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
