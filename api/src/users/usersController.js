import UserDB from './UsersModel.js';
import bcrypt from 'bcrypt';
import { createToken } from '../utils/token.js';
import { sendMailRegistration } from '../utils/mail.js';

const getAll = async (req, res) => {
  try {
    console.log(req.query);
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
  const passwordNotHash = req.body.password;
  try {
       if (req.body?.password) {
         req.body.password = await bcrypt.hash(req.body.password, 4);
    }
    const user = await UserDB.findOneAndUpdate({
      id: req.params.userId,
      updateData: req.body,
      }, {new: true} );
    if (passwordNotHash) {
    const { password, ...userData } = user._doc;
        const { email, firstName, secondName } = userData;
    await sendMailRegistration({
      email,
      firstName,
      secondName,
      password: passwordNotHash,
    });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const create = async (req, res) => {
  try {
    console.log(req.body);
    const passwordNotHash = req.body.password;
    req.body.password = await bcrypt.hash(req.body.password, 4);
    const data = await UserDB.create(req.body);
    const { password, ...userData } = data._doc;
    const token = createToken({
      payload: userData,
    });
    const { email, firstName, secondName } = userData;
    await sendMailRegistration({
      email,
      firstName,
      secondName,
      password: passwordNotHash,
    });

    res.json({ token });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const login = async (req, res) => {
  try {
    console.log(req.body.email);
    const user = await UserDB.findOne({ email: req.body.email });
    console.log('user:', user);
    if (user) {
      const isPasswordEqual = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (isPasswordEqual) {
        const { password, ...userData } = user._doc;
        const token = createToken({
          payload: userData,
        });
        return res.json({ token });
        // return res.json({ token, user });
      } else {
        throw new Error('Неправильна електронна пошта користувача або пароль');
      }
    }
    throw new Error('Неправильна електронна пошта користувача або пароль');
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
