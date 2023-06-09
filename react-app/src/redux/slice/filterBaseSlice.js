import { createSlice } from '@reduxjs/toolkit';

const filterBaseSlice = createSlice({
  name: 'filterBase',
  initialState: {
    filterSearch: '',
    filterMainCategory: '',
    filterSubCategory: '',
    filterMinPrice: '',
    filterMaxPrice: '',
    filterSortingPrice: '',
    filterManufacture: [],
    filterDosageForm: [],
    filterRecipe: false,
    filterPregnant: false,
    filterChildren: false
  },
  reducers: {
    mainCategory: (state, action) => {
      state.filterMainCategory = action.payload;
    },
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
    minPrice: (state, action) => {
      state.filterMinPrice = action.payload;
    },
    maxPrice: (state, action) => {
      state.filterMaxPrice = action.payload;
    },
    sortingPrice: (state, action) => {
      state.filterSortingPrice = action.payload;
    }
  }
});

// eslint-disable-next-line max-len
export const { addManufacture, removeManufacture, addDosageForm, removeDosageForm, recipe, pregnant, children, minPrice, maxPrice, sortingPrice, mainCategory } = filterBaseSlice.actions;

export default filterBaseSlice.reducer;
