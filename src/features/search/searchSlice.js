import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'searchTerm',
  initialState: {
    searchTerm: '',
  },

  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = searchSlice.actions;
export const searchTermSelector = (state) => state.searchTerm;
export default searchSlice.reducer;
