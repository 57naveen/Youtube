import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu : (state) =>{
      state.isMenuOpen = false
    }
  },
});

export default AppSlice.reducer;

export const {toggleMenu,closeMenu} = AppSlice.actions
