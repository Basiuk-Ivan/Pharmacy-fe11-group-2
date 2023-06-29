import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'isModal',
  initialState: {
    openModal: false,
    modalForgotPass: false,
  },
  reducers: {
    openModal: state => {
      state.openModal = true;
      state.modalForgotPass = false;
    },
    closeModal: state => {
      state.openModal = false;
    },
    openModalForgotPass: state => {
      state.openModal = false;
      state.modalForgotPass = true;
    },
    closeModalForgotPass: state => {
      state.modalForgotPass = false;
      state.openModal = false;
    },
  }
});

export const {
  openModal,
  closeModal,
  openModalForgotPass,
  closeModalForgotPass
} = modalSlice.actions;
export default modalSlice.reducer;
