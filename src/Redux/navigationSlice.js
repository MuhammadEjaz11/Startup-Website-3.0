// src/redux/slices/navigationSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMobileMenuOpen: false,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
  },
});

export const { toggleMobileMenu } = navigationSlice.actions;
export default navigationSlice.reducer;
