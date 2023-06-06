import { createSlice } from '@reduxjs/toolkit';

const filterBaseSlice = createSlice({
  name: 'filterBase',
  initialState: {
    filterManufacture: [],
    filterDosageForm: [],
    filterRecipe: false,
    filterPregnant: false,
    filterChildren: false
  },
  reducers: {
    addManufacture: (state, action) => {
      state.filterManufacture.push(action.payload);
    },
    removeManufacture: (state, action) => {
      state.filterManufacture = state.filterManufacture.filter(item => item !== action.payload);
    },
    addDosageForm: (state, action) => {
      state.filterDosageForm.push(action.payload);
    },
    removeDosageForm: (state, action) => {
      state.filterDosageForm = state.filterDosageForm.filter(item => item !== action.payload);
    },
    recipe: state => {
      state.filterRecipe = !state.filterRecipe;
    },
    pregnant: state => {
      state.filterPregnant = !state.filterPregnant;
    },
    children: state => {
      state.filterChildren = !state.filterChildren;
    },
  }
});

export const { addManufacture, removeManufacture, addDosageForm, removeDosageForm, recipe, pregnant, children } = filterBaseSlice.actions;

export default filterBaseSlice.reducer;
