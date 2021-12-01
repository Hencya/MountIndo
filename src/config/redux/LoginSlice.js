// library
import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "auth",
  initialState: {
    userId: -1,
    username: "",
    login: false,
    avatar: "",
    fullname: "",
  },
  reducers: {
    login: (state, action) => {
      state.userId = action.payload.userId;
      state.username = action.payload.username;
      state.login = action.payload.login;
      state.avatar = action.payload.avatar;
      state.fullname = action.payload.fullname;
    },
    logout: (state) => {
      state.userId = -1;
      state.username = "";
      state.login = false;
      state.avatar = "";
      state.fullname = "";
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
