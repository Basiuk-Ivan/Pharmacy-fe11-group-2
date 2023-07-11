import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'isModal',
  initialState: {
    openModal: false,
    modalForgotPass: false,
    errorModal: false
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
    modalErrortPass: (state, action) => {
      state.errorModal = action.payload;
    }
  }
});

export const { openModal, closeModal, openModalForgotPass, closeModalForgotPass, modalErrortPass } =
  modalSlice.actions;
export default modalSlice.reducer;
