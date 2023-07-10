import bcrypt from 'bcrypt';
import UserDB from './UsersModel.js';
import { createToken } from '../utils/token.js';
import { sendMailRegistration } from '../utils/mail.js';
import { generateRandomString } from '../utils/stringRandom.js';
import {
  getUsers,
  getUserById,
  updateUserById,
  createUser,
  forgotUpdateUserPassword,
} from './UserDataAccess.js';

export const getUserService = async query => {
  try {
    const users = await getUsers(query);
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUserByIDService = async userId => {
  try {
    const user = await getUserById(userId);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const forgotPasswordUserService = async query => {
  try {
    const user = await UserDB.findOne(query);
    if (!user) {
      throw new Error('Email не знайдено');
    } else {
      const passwordNotHash = generateRandomString(8);
      const passwordHash = await bcrypt.hash(passwordNotHash, 4);
      const updatedUser = await forgotUpdateUserPassword(
        user.email,
        passwordHash
      );
      const { password, ...userData } = updatedUser._doc;
      const { email, firstName, secondName } = userData;
      await sendMailRegistration({
        email,
        firstName,
        secondName,
        password: passwordNotHash,
      });
      return updatedUser;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateUserService = async (userId, updatedFields) => {
  try {
    const updatedUser = await updateUserById(userId, updatedFields);

    return updatedUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createUserService = async userData => {
  try {
    const passwordNotHash = userData.password;
    userData.password = await bcrypt.hash(userData.password, 4);
    const createdUser = await createUser(userData);
    const { password, ...userDataWithoutPassword } = createdUser._doc;
    const token = createToken({
      payload: userDataWithoutPassword,
    });
    const { email, firstName, secondName } = userDataWithoutPassword;
    await sendMailRegistration({
      email,
      firstName,
      secondName,
      password: passwordNotHash,
    });
    return { token };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loginUserService = async (email, password) => {
  try {
    const user = await UserDB.findOne({ email });
    if (user) {
      const isPasswordEqual = await bcrypt.compare(password, user.password);
      if (isPasswordEqual) {
        const { password, ...userData } = user._doc;
        const token = createToken({
          payload: userData,
        });
        return { token };
      } else {
        throw new Error('Неправильна електронна пошта користувача або пароль');
      }
    }
    throw new Error('Неправильна електронна пошта користувача або пароль');
  } catch (error) {
    throw new Error(error.message);
  }
};
