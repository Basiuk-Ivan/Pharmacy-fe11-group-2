import mongoose from 'mongoose';

const Category = new mongoose.Schema(
    {
        idName: { type: String, required: true, unique: true },
        name: { type: String, required: true, unique: true },
        parentId: { type: String, required: true, unique: true },
        description: { type: String, required: true, unique: true },
        level: { type: String, required: true, unique: true },
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

export default mongoose.model('CategoryDB', Category, 'categories');
