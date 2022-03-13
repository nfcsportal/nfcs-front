declare interface IMainSliceState {
  locale: string;
}

declare type IModalSliceState = {
  modal: '' | 'change-password' | 'forgot-password-success' | 'forgot-password-error';
};

declare interface IAuthSlice {
  isAuthenticated: boolean;
  authLoader: boolean;
  currentUser: any;
}

declare type TState = {
  main: IMainSliceState;
  auth: IAuthSlice;
  modal: IModalSliceState;
};

declare interface IUser {
  email: string;
  id: string;
  isActivated: boolean;
}
