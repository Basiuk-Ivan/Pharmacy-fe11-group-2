import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: (sessionStorage.getItem('currentCategory') || ''),
  priceMin: '',
  priceMax: '',
  sort: 1,
  country: [],
  productForm: [],
  prescriptionLeave: false,
  whoCanPregnant: false,
  whoCanChildren: false,
  limit: 8
};

const filterBaseSlice = createSlice({
  name: 'filterBase',
  initialState,
  reducers: {
    reset: () => initialState,
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
      state.prescriptionLeave = !state.prescriptionLeave;
    },
    pregnant: state => {
      state.whoCanPregnant = !state.whoCanPregnant;
    },
    children: state => {
      state.whoCanChildren = !state.whoCanChildren;
    },
    minPrice: (state, action) => {
      state.priceMin = action.payload;
    },
    maxPrice: (state, action) => {
      state.priceMax = action.payload;
    },
    sortingPrice: (state, action) => {
      state.sort = action.payload;
    }
  }
});

export const {
  addManufacture,
  removeManufacture,
  addDosageForm,
  removeDosageForm,
  recipe,
  pregnant,
  children,
  minPrice,
  maxPrice,
  sortingPrice,
  mainCategory,
  reset
} = filterBaseSlice.actions;

export default filterBaseSlice.reducer;
