import { createSlice } from '@reduxjs/toolkit';
import { login, register } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { fullName: '', userName: '' },
    accessToken: null,
    refreshToken: null,
    isLoggedIn: false,
    isRefreshing: false,
    isRegister: false,
  },
  reducers: {},
  extraReducers: buider =>
    buider
      .addCase(register.pending, state => {
        state.isLoggedIn = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isRegister = true;
      })
      .addCase(register.rejected, state => {
        state.isLoggedIn = false;
      })
      .addCase(login.pending, state => {
        state.isLoggedIn = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, state => {
        state.isLoggedIn = false;
      }),
});

export const authReducer = authSlice.reducer;
