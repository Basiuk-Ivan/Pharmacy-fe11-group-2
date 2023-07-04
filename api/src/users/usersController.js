import UserDB from './UsersModel.js';
import bcrypt from 'bcrypt';
import { createToken } from '../utils/token.js';
import { sendMailRegistration } from '../utils/mail.js';
import { generateRandomString } from '../utils/stringRandom.js';

const getUser = async (req, res) => {
  try {
    const users = await UserDB.find(req.query);
    res.json(users);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const getUserByID = async (req, res) => {
  try {
    const user = await UserDB.findById(req.params.userId);
    res.json(user);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

// Create a function for reusable perpose

const passwordUser = async (req, res) => {
  try {
    const data = await UserDB.findOne(req.query);
    if (!data) {
      res.status(404).json('Email не знайдено ');
    } else {
      const passwordNotHash = generateRandomString(8);
      const passwordHash = await bcrypt.hash(passwordNotHash, 4);
      const filter = { email: data.email };
      const update = { password: passwordHash };
      const user = await UserDB.findOneAndUpdate(filter, update, { new: true });
      const { password, ...userData } = user._doc;
      const { email, firstName, secondName } = userData;
      await sendMailRegistration({
        email,
        firstName,
        secondName,
        password: passwordNotHash,
      });
      res.json(user);
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const updateUser = async (req, res) => {
  const passwordNotHash = req.body.password;
  try {
    if (req.body?.password) {
      req.body.password = await bcrypt.hash(req.body.password, 4);
    }

    const user = await UserDB.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      req.body,
      { new: true }
    );

    // const user = await UserDB.findOneAndUpdate({
    //   id: req.params.id,
    //   updateData: req.body,
    //   }, {new: true} );
    //    console.log(user);

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

const createUser = async (req, res) => {
  try {
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

const loginUser = async (req, res) => {
  try {
    const user = await UserDB.findOne({ email: req.body.email });
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
  getUser,
  getUserByID,
  passwordUser,
  updateUser,
  createUser,
  loginUser,
};
