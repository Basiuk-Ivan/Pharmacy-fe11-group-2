import UserDB from "./usersModel.js";
import bcrypt from "bcrypt";

const getAll = async (req, res) => {
  try {
    const users = await UserDB.find(req.query);
    res.json(users);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getByID = async (req, res) => {
  try {
    const user = await UserDB.findById(req.params.userId);
    res.json(user);
  } catch (err) {
    res.status(500).json(err.message);
  }
};


const update = async (req, res) => {
  try {
    if (req.body?.password) {
      req.body.password = await bcrypt.hash(req.body.password, 4);
    }
    await UserDB.findByIdAndUpdate({
      id: req.params.userId,
      updateData: req.body,
    });
    const user = await UserDB.findById({ id: req.params.userId });
    res.json(user);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const create = async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 4);
   const data = await new UserDB(req.body).save();

    res.json({ data: "Успішна реєстрація" });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const login = async (req, res) => {
  try {
    const user = await UserDB.findOne({email: req.query.email});
    if (user) {
      const isPasswordEqual = await bcrypt.compare( req.query.password, user.password );
      if (isPasswordEqual) {
          return res.json(user);
      } else {
        throw new Error("Неправильна електронна пошта користувача або пароль");
      }

      }
    throw new Error("Неправильна електронна пошта користувача або пароль");
      } catch (err) {
    res.status(500).json(err.message);
  }
};

export const UserController = {
  getAll,
  getByID,
  update,
  create,
  login,
};
