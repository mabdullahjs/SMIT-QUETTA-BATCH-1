import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "Auth",
  initialState: {
    uid: '',
    role: '', // 'Admin' or 'Student'
    isAuthenticated: false,
    loading: true,
  },
  reducers: {
    setUser: (state, action) => {
      state.uid = action.payload.uid;
      state.role = action.payload.role;
      state.isAuthenticated = true;
      state.loading = false;
    },
    logout: (state) => {
      state.uid = '';
      state.role = '';
      state.isAuthenticated = false;
      state.loading = false;
    },
    setAuthLoading: (state, action) => {
      state.loading = action.payload;
    }
  },
});

export const { setUser, logout, setAuthLoading } = authSlice.actions;

export default authSlice.reducer;