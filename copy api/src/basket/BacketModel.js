import mongoose from "mongoose";

const product = new mongoose.Schema(
  {
    productID: { type: mongoose.Types.ObjectId, ref: "ProductDB" },
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

export const Backet = new mongoose.Schema(
  {
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

export default mongoose.model("BacketDB", Backet, "backets");
