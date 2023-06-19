import mongoose from 'mongoose';

const Prod = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    productOfTheDay: { type: Boolean, required: true },
    useful: { type: Boolean, required: true },
    categories: { type: Array, required: true },
    img: { type: Array, required: true },
    instruction: { type: Object },
    article: { type: Number, required: true },
    quantity: { type: Number, required: true },
    brand: { type: String, required: true },
    manufacturer: { type: String, required: true },
    country: { type: String, required: true },
    productForm: { type: String, required: true },
    activeSubstance: { type: Array, required: true },
    bestBeforeDate: String,
    prescriptionLeave: { type: Boolean, required: true },
    whoCanChildren: { type: Boolean, required: true },
    whoCanPregnant: { type: Boolean, required: true },
    ratingClick: { type: Number, required: true },
    ratingTotal: { type: Number, required: true },
    packageQuantity: { type: String, required: true },
    promotionOfTheMonth: { type: Boolean, required: true },
    descriptionForSlider: { type: String },
    analogs: { type: String },
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

export default mongoose.model('ProductDB', Prod, 'products');
