import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuth: false,
    id: '',
    firstName: '',
    secondName: '',
    gender: '',
    email: '',
    birthday: '',
    phoneNumber: '',
    admin: false,
    cartStoreId: '',
    favoriteStoreId: '',
    changeStateReview: ''
  },
  reducers: {
    setUser: (state, action) => {
      state.isAuth = true;
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.secondName = action.payload.secondName;
      state.gender = action.payload.gender;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      state.admin = action.payload.role === 'admin';
      if (!!action.payload.userBirthday) {
        state.birthday = action.payload.userBirthday;
      }
    },
    updateUser: (state, action) => {
      state.secondName = action.payload.secondName;
      state.firstName = action.payload.firstName;
      state.gender = action.payload.gender;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      if (!!action.payload.birthday) {
        state.birthday = action.payload.birthday;
      }
    },
    removeUser: state => {
      state.isAuth = false;
      state.id = '';
      state.firstName = '';
      state.secondName = '';
      state.gender = '';
      state.email = '';
      state.phoneNumber = '';
      state.admin = false;
      state.cartStoreId = '';
      state.favoriteStoreId = '';
    },
    setCartStoreId: (state, action) => {
      state.cartStoreId = action.payload;
    },
    setFavoriteStoreId: (state, action) => {
      state.favoriteStoreId = action.payload;
    },
    changeStateReview: (state, action) => {
      state.changeStateReview = action.payload;
    },
  }
});

export const {
  setUser,
  removeUser,
  setCartStoreId,
  setFavoriteStoreId,
  changeStateReview,
  updateUser
} = userSlice.actions;

export default userSlice.reducer;
