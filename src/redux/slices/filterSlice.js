import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  currentPage: 1,
  sort: { name: 'убыванию популярности', sortProperty: 'rating' },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    activateCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    activateSort: (state, action) => {
      state.sort = action.payload;
    },
    activateCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { activateCategoryId, activateSort, activateCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
