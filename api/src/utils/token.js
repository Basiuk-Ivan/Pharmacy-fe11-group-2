import jwt from "jsonwebtoken";

export const createToken = ({ payload }) => {
    let secretKey = process.env.JWT_SECRET;

    return jwt.sign(
        payload,
        secretKey,
        {
            expiresIn: "30d",
        }
    );
};