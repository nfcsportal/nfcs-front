import { createSlice, Dispatch } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import axios from 'axios';

import { ROUTES } from '../../Constants/Routes';
import $api, { $refreshApi, API_URL } from '../../Service/api/intercepter';
import { AuthResponse } from '../../Service/api/types';
import { setModal } from './modal';

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
export const registration =
  (email: string, password: string, history: any) => (dispatch: Dispatch) => {
    dispatch(setAuthLoader(true));
    $api
      .post('/registration', {
        email,
        password,
      })
      .then(async (response: AxiosResponse<IAuthUserResponse>) => {
        if (response) {
          await localStorage.setItem('token', response.data.accessToken);
          await localStorage.setItem('refresh', response.data.refreshToken);
          dispatch(setCurrentUser(response.data.user));
          dispatch(setAuth(true));
          dispatch(setAuthLoader(false));
          history.push(ROUTES.DASHBOARD);
        }
      })
      .catch((e) => {
        dispatch(setAuthLoader(false));
        console.log(e);
      });
  };

export const signIn = (email: string, password: string, history: any) => (dispatch: Dispatch) => {
  dispatch(setAuthLoader(true));
  $api
    .post('/login', {
      email,
      password,
    })
    .then(async (response: AxiosResponse<IAuthUserResponse>) => {
      if (response) {
        await localStorage.setItem('token', response.data.accessToken);
        await localStorage.setItem('refresh', response.data.refreshToken);
        dispatch(setCurrentUser(response.data.user));
        dispatch(setAuth(true));
        dispatch(setAuthLoader(false));
        history.push(ROUTES.DASHBOARD);
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

export const users = (id: string) => (dispatch: Dispatch) => {
  dispatch(setAuthLoader(true));
  $api.get(`/user/${id}`).then((response: AxiosResponse<IAuthUserResponse>) => {
    console.log(response);
  });
};

export const checkAuth = (history: any) => (dispatch: Dispatch) => {
  dispatch(setAuthLoader(true));
  $refreshApi
    .get(`${API_URL}/refresh`, { withCredentials: true })
    .then(async (response: AxiosResponse<any>) => {
      if (response) {
        await localStorage.setItem('token', response.data.accessToken);
        await localStorage.setItem('refresh', response.data.refreshToken);
        dispatch(setCurrentUser(response.data.user));
        dispatch(setAuth(true));
        dispatch(setAuthLoader(false));
      }
    })
    .catch((e) => {
      history.push(ROUTES.SIGN_IN);
      console.log(e);
    });
};
export const forgotPassword = (email: string) => (dispatch: Dispatch) => {
  dispatch(setAuthLoader(true));
  axios
    .post(`${API_URL}/resetpasslink`, {
      email,
    })
    .then(async (response: AxiosResponse<any>) => {
      if (response) {
        dispatch(setModal('forgot-password-success'));
      }
    })
    .catch((e) => {
      console.log(e);
      dispatch(setModal('forgot-password-error'));
    })
    .finally(() => {
      dispatch(setAuthLoader(false));
    });
};

export const { setAuth, setAuthLoader, setCurrentUser } = authSlice.actions;

export default authSlice.reducer;
