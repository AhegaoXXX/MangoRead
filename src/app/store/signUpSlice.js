import { createSlice } from "@reduxjs/toolkit";

const signUpSlice = createSlice({
  name: "signUpSlice",
  initialState: {
    mode: false,
    account: false,
    user: "",
    comment: "",
    authModalTabsIndex: 0,
    // userAccount: localStorage.getItem("tokenA"),
  },
  reducers: {
    infoModalOpen: (state) => {
      state.mode = true;
    },
    infoModalClose: (state) => {
      state.mode = false;
    },
    AccountLogOut: (state) => {
      state.account = false;
    },
    infoAccount: (state, action) => {
      state.mode = false;
      state.account = true;
      state.user = action.payload;
    },
    addComment: (state, action) => {
      state.comment = action.payload;
    },
    changeAuthModalTabs: (state, action) => {
      state.authModalTabsIndex = action.payload;
    },
  },
});

export const {
  infoModalOpen,
  infoModalClose,
  infoAccount,
  AccountLogOut,
  addComment,
  changeAuthModalTabs,
} = signUpSlice.actions;

export default signUpSlice.reducer;
