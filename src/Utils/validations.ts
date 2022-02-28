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
