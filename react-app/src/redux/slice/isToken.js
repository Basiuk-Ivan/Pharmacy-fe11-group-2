import { createSlice } from '@reduxjs/toolkit';

const storedToken = localStorage.getItem('token');
const initialState = {
  token: storedToken || '',
  isOpenedLoginModal: false,
  isOpenedLogoutModal: false,
  isLogin: false,
  isRegistration: false,
  isOpenedRegistrationModal: false
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: state => {
      state.token = '';
    },
    openLoginModal: (state, acyion) => {
      state.isOpenedLoginModal = acyion.payload;
    },
    closeLoginModal: (state, action) => {
      state.isOpenedLoginModal = action.payload;
    },
    openLogoutModal: (state, acyion) => {
      state.isOpenedLogoutModal = acyion.payload;
    },
    setLogin: (state, action) => {
      state.isLogin = action.payload;
    },
    setRegistration: (state, action) => {
      state.isRegistration = action.payload;
    },
    openRegistrationModal: (state, acyion) => {
      state.isOpenedRegistrationModal = acyion.payload;
    }
  }
});

export const {
  setToken,
  removeToken,
  openLoginModal,
  closeLoginModal,
  openLogoutModal,
  setLogin,
  setRegistration,
  openRegistrationModal
} = tokenSlice.actions;

export default tokenSlice.reducer;
