import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState, LoginCredential, RegisterCredential } from '../type/types';

export const instance = axios.create({
  baseURL: 'http://localhost:3001/auth',
});

const setToken = (token?: string) => {
  if (token) {
    return (instance.defaults.headers.Authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.Authorization = '';
};

instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const { data } = await instance.post('/refresh', { refreshToken });

        setToken(data.accessToken);
        localStorage.setItem('refreshToken', data.refreshToken);

        return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (credential: RegisterCredential, thunkApi) => {
    try {
      const res = await instance.post('/register', {
        fullName: credential.fullName,
        userName: credential.userName,
        password: credential.password,
      });
      return res.data;
    } catch (error: unknown) {
      if (error instanceof Error) return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credential: LoginCredential, thunkApi) => {
    try {
      const res = await instance.post('/login', {
        userName: credential.userName,
        password: credential.password,
      });
      setToken(res.data.accessToken);
      localStorage.setItem('refreshToken', res.data.refreshToken);

      return res.data;
    } catch (error: unknown) {
      if (error instanceof Error) return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    const res = await instance.post('/logout');
    setToken();
    return res.data;
  } catch (error: unknown) {
    if (error instanceof Error) return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk<
  ReturnType<typeof instance.get>,
  void,
  { state: RootState }
>('auth/refresh', async (_, thunkApi) => {
  const { accessToken } = thunkApi.getState().auth;
  if (!accessToken) {
    return thunkApi.rejectWithValue('No valid token');
  }

  try {
    setToken(accessToken);
    const res = await instance.get('/current');
    return res.data;
  } catch (error: unknown) {
    if (error instanceof Error) return thunkApi.rejectWithValue(error.message);
  }
});
