export type TSignInValues = {
  email: string;
  password: string;
};
export type TSignUpValues = {
  email: string;
  password: string;
  passwordConfirmation: string;
  disclaimer: false;
};
export type TResetPass = {
  password: string;
  passwordConfirmation: string;
};
export type TForgotPass = {
  email: string;
};
export type TChnagePassword = {
  newPass: string;
  oldPass: string;
};
export const SIGN_IN_INITIAL: TSignInValues = {
  email: '',
  password: '',
};

export const SIGN_UP_INITIAL: TSignUpValues = {
  email: '',
  password: '',
  passwordConfirmation: '',
  disclaimer: false,
};

export const RESET_PASS_INITIAL: TResetPass = {
  password: '',
  passwordConfirmation: '',
};

export const FORGOT_PASS_INITIAL: TForgotPass = {
  email: '',
};

export const CHNAGE_PASS_INITIAL: TChnagePassword = {
  newPass: '',
  oldPass: '',
};
