declare interface IMainSliceState {
  locale: string;
}

declare interface IAuthSlice {
  isAuthenticated: boolean;
  authLoader: boolean;
  currentUser: any;
}

declare type TState = {
  main: IMainSliceState;
  auth: IAuthSlice;
};

declare interface IUser {
  email: string;
  id: string;
  isActivated: boolean;
}
