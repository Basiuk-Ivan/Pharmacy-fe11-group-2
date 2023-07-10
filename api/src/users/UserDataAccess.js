import UserDB from './UsersModel.js';

export const getUsers = async query => {
  try {
    const users = await UserDB.find(query);
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getUserById = async userId => {
  try {
    const user = await UserDB.findById(userId);
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateUserById = async (userId, updatedFields) => {
  try {
    const user = await UserDB.findByIdAndUpdate(userId, updatedFields, {
      new: true,
    });
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const createUser = async userData => {
  try {
    const createdUser = await UserDB.create(userData);
    return createdUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const forgotUpdateUserPassword = async (email, newPassword) => {
  try {
    const filter = { email };
    const update = { password: newPassword };
    const user = await UserDB.findOneAndUpdate(filter, update, { new: true });
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};
