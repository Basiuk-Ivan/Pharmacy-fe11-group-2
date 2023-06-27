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
    phoneNumber: '',
    admin: false,
    cartStoreId: '',
    favoriteStoreId: ''
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
    }
  }
});

export const {
  setUser,
  removeUser,
  setCartStoreId,
  setFavoriteStoreId
} = userSlice.actions;

export default userSlice.reducer;
