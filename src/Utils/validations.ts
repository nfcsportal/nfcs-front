import * as yup from 'yup';

export const signInValidationSchema = yup.object({
  email: yup
    .string()
    .email('validation.scheme.signin.email.invalid')
    .required('validation.scheme.signin.email.requiere'),
  password: yup
    .string()
    .min(8, 'validation.scheme.signin.pass.length')
    .required('validation.scheme.signin.pass.requiere'),
});

export const signUpValidationSchema = yup.object({
  email: yup
    .string()
    .email('validation.scheme.signin.email.invalid')
    .required('validation.scheme.signin.email.requiere'),
  password: yup
    .string()
    .min(8, 'validation.scheme.signin.pass.length')
    .required('validation.scheme.signin.pass.requiere'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'validation.scheme.signin.pass.mustmuch'),
  disclaimer: yup.boolean().oneOf([true]),
});

export const forgotPassValidationSchema = yup.object({
  email: yup
    .string()
    .email('validation.scheme.signin.email.invalid')
    .required('validation.scheme.signin.email.requiere'),
});

export const resetPasswordValidationScheme = yup.object({
  newPass: yup
    .string()
    .min(8, 'validation.scheme.signin.pass.length')
    .required('validation.scheme.signin.pass.requiere'),
  oldPass: yup
    .string()
    .min(8, 'validation.scheme.signin.pass.length')
    .required('validation.scheme.signin.pass.requiere'),
});
