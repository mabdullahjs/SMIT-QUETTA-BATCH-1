import { createSlice } from "@reduxjs/toolkit";

// const data = "firebase sa data mangwalia"

export const authSlice = createSlice({
  name: "Auth",
  initialState: {
    user: false,
    role: "Admin",
  },
  reducers: {
    setLoginStatus: (state, action) => {
      state.user = action.payload; // true / false
    },
    setRole: (state, action) => {
      state.role = action.payload; // Admin / Student
    },
    logout: (state) => {
      state.user = false;
      state.role = "Admin";
    },
  },
});

export const { setLoginStatus, setRole, logout } = authSlice.actions;

export default authSlice.reducer;
