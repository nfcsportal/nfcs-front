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
export type TForgotPass = {
  email: string;
};
export type TResetPass = {
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

export const FORGOT_PASS_INITIAL: TForgotPass = {
  email: '',
};

export const RESET_PASS_INITIAL: TResetPass = {
  newPass: '',
  oldPass: '',
};
