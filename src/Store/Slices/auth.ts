import { createSlice, Dispatch } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';

import $api, { API_URL } from '../../Service/api/intercepter';
import { AuthResponse } from '../../Service/api/types';

interface IAuthUserResponse extends AuthResponse {
  user: IUser;
}
const initialState: IAuthSlice = {
  isAuthenticated: false,
  authLoader: false,
  currentUser: {},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    },
    setAuthLoader: (state, action) => {
      return {
        ...state,
        authLoader: action.payload,
      };
    },
    setCurrentUser: (state, action) => {
      return {
        ...state,
        currentUser: action.payload,
      };
    },
  },
});

export const login = (email: string, password: string) => (dispatch: Dispatch) => {
  dispatch(setAuthLoader(true));
  $api
    .post('/login', {
      email,
      password,
    })
    .then((response: AxiosResponse<IAuthUserResponse>) => {
      if (response) {
        localStorage.setItem('token', response.data.accessToken);
        dispatch(setAuth(true));
        dispatch(setCurrentUser(response.data.user));
        dispatch(setAuthLoader(false));
      }
    })
    .catch((e) => {
      dispatch(setAuthLoader(false));
      console.log(e);
    });
};

export const registration = (email: string, password: string) => (dispatch: Dispatch) => {
  dispatch(setAuthLoader(true));
  $api
    .post('/registration', {
      email,
      password,
    })
    .then((response: AxiosResponse<IAuthUserResponse>) => {
      if (response) {
        localStorage.setItem('token', response.data.accessToken);
        dispatch(setCurrentUser(response.data.user));
        dispatch(setAuth(true));
        dispatch(setAuthLoader(false));
      }
    })
    .catch((e) => {
      dispatch(setAuthLoader(false));
      console.log(e);
    });
};

export const logout = () => (dispatch: Dispatch) => {
  dispatch(setAuthLoader(true));
  $api
    .post('/logout')
    .then((response: AxiosResponse<IAuthUserResponse>) => {
      if (response) {
        localStorage.removeItem('token');
        dispatch(setAuth(false));
        dispatch(setAuthLoader(false));
      }
    })
    .catch((e) => {
      dispatch(setAuthLoader(false));
      console.log(e);
    });
};

export const users = () => (dispatch: Dispatch) => {
  dispatch(setAuthLoader(true));
  $api.get('/users').then((response: AxiosResponse<IAuthUserResponse>) => {
    console.log(response);
  });
};

export const checkAuth = () => (dispatch: Dispatch) => {
  dispatch(setAuthLoader(true));
  axios
    .get(`${API_URL}/refresh`, { withCredentials: true })
    .then((response: AxiosResponse<any>) => {
      if (response) {
        localStorage.setItem('token', response.data.accessToken);
        dispatch(setCurrentUser(response.data.user));
        dispatch(setAuth(true));
        dispatch(setAuthLoader(false));
      }
    })
    .catch((e) => {
      console.log(e);
    });
};

export const { setAuth, setAuthLoader, setCurrentUser } = authSlice.actions;

export default authSlice.reducer;
