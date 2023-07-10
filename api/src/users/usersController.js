import bcrypt from 'bcrypt';

import {
  getUserService,
  getUserByIDService,
  forgotPasswordUserService,
  updateUserService,
  createUserService,
  loginUserService,
} from './UserService.js';
import { sendMailRegistration } from '../utils/mail.js';

export const getUser = async (req, res) => {
  try {
    const users = await getUserService(req.query);
    res.json(users);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getUserByID = async (req, res) => {
  try {
    const user = await getUserByIDService(req.params.userId);
    res.json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const forgotPasswordUser = async (req, res) => {
  try {
    await forgotPasswordUserService(req.query);
    res.json('Password updated successfully');
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const updateUser = async (req, res) => {
  const passwordNotHash = req.body.password;
  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 4);
    }

    const user = await updateUserService(req.params.id, req.body);

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
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    const passwordNotHash = req.body.password;
    req.body.password = await bcrypt.hash(req.body.password, 4);
    const token = await createUserService(req.body);
    const { email, firstName, secondName } = req.body;
    await sendMailRegistration({
      email,
      firstName,
      secondName,
      password: passwordNotHash,
    });

    res.json({ token });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginUserService(email, password);
    return res.json(token);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const UserController = {
  getUser,
  getUserByID,
  forgotPasswordUser,
  updateUser,
  createUser,
  loginUser,
};
