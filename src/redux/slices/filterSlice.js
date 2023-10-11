import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
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
  },
});

export const { activateCategoryId, activateSort } = filterSlice.actions;

export default filterSlice.reducer;
