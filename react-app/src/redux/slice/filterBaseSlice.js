import { createSlice } from '@reduxjs/toolkit';

const filterBaseSlice = createSlice({
  name: 'filterBase',
  initialState: {
    filterSearch: '',
    categories: '',
    filterSubCategory: '',
    filterMinPrice: '',
    filterMaxPrice: '',
    filterSortingPrice: '',
    country: [],
    productForm: [],
    filterRecipe: false,
    filterPregnant: false,
    filterChildren: false
  },
  reducers: {
    mainCategory: (state, action) => {
      state.categories = action.payload;
    },
    addManufacture: (state, action) => {
      state.country.push(action.payload);
    },
    removeManufacture: (state, action) => {
      state.country = state.country.filter(item => item !== action.payload);
    },
    addDosageForm: (state, action) => {
      state.productForm.push(action.payload);
    },
    removeDosageForm: (state, action) => {
      state.productForm = state.productForm.filter(item => item !== action.payload);
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
