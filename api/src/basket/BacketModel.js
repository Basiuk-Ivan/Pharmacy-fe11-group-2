import mongoose from "mongoose";

const product = new mongoose.Schema(
    {
        productID: {type: mongoose.Types.ObjectId, ref: "ProductDB"},
        quantity: {type: Number, required: true},
    }, {
        timestamps: false,
        versionKey: false,
        _id: false,
        toJSON: {
            transform(doc, ret) {
                delete ret.__v;
            },
        },
    },
);

export const Backet = new mongoose.Schema(
    {
        products: [product],
        user: {type: mongoose.Types.ObjectId, ref: "UserDB"},
    }, {
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
    },
);

export default mongoose.model("BacketDB", Backet, "backets");
