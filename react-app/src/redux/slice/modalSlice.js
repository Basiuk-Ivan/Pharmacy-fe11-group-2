import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'isModal',
  initialState: {
    openModal: false,
  },
  reducers: {
    openModal: state => {
      state.openModal = true;
    },
    closeModal: state => {
      state.openModal = false;
    }
  }
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
