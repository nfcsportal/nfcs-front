import { useFormik } from 'formik';
import React from 'react';

import { FORGOT_PASS_INITIAL, TForgotPass } from '../../../../Constants/authFLow';
import { ROUTES } from '../../../../Constants/Routes';
import { useAllowSubmit } from '../../../../Hooks/useAllowSubmitForm';
import { forgotPassValidationSchema } from '../../../../Utils/validations';
import Input from '../../../atoms/Input';
import AuthView from '../../../organisms/AuthViews';

const ForgotPassword: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      ...FORGOT_PASS_INITIAL,
    },
    validationSchema: forgotPassValidationSchema,
    onSubmit: (values: TForgotPass) => {
      console.log(values);
    },
  });
  const allowSubmit = useAllowSubmit(formik, FORGOT_PASS_INITIAL);

  return (
    <AuthView
      submitHandler={formik.handleSubmit}
      allowSubmit={allowSubmit}
      header="forgotpass.header"
      bottomText="forgotpass.returnTo"
      bottomLinkedText={{ href: ROUTES.SIGN_IN, title: 'forgotpass.signin' }}
      buttonText="forgotpass.button"
    >
      <Input
        htmlFor="email"
        type="text"
        name="email"
        placeHolder="forgotpass.email.placeholder"
        label="forgotpass.email.title"
        error={formik.touched.email && formik.errors.email}
        onChange={formik.handleChange}
        value={formik.values.email}
        onClick={formik.setFieldTouched}
      />
    </AuthView>
  );
};

export default ForgotPassword;
