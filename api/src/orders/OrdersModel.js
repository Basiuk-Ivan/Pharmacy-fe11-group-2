import mongoose from "mongoose";
// import { boolean, number} from "joi";

const product = new mongoose.Schema(
  {
    productID: { type: mongoose.Types.ObjectId, ref: "ProductDB" },
    price: { type: Number, required: true },
    amount: { type: Number, required: true },
  },{
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
    },
);

export const Order = new mongoose.Schema(
  {
    orderID: { type: Number, required: true },
    orderStatus: String,
    totalPrice: Number,
    email: String,
    phone: String,
    orderPaid: Boolean,
    products: [product],
    user: { type: mongoose.Types.ObjectId, ref: "UserDB" },
  },{
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
    },
);

export default mongoose.model("OrderDB", Order, "orders");
