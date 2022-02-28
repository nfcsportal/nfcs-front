import { useFormik } from 'formik';
import React, { useState } from 'react';

import { SIGN_IN_INITIAL } from '../../../../Constants/authFLow';
import { useAllowSubmit } from '../../../../Hooks/useAllowSubmitForm';
import { signInValidationSchema } from '../../../../Utils/validations';
import Input from '../../../atoms/Input';
import AuthView from '../../../organisms/AuthViews';

const SignIn: React.FC = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      ...SIGN_IN_INITIAL,
    },
    validationSchema: signInValidationSchema,
    onSubmit: (arg: any) => {
      console.log(arg);
    },
  });
  const allowSubmit = useAllowSubmit(formik, SIGN_IN_INITIAL);
  console.log(formik.errors);

  return (
    <AuthView
      submitHandler={formik.handleSubmit}
      allowSubmit={allowSubmit}
      header="signin.header"
      aboveButtonText={{ href: '/', title: 'signin.forgot' }}
      bottomText="signin.donthaveaccount"
      bottomLinkedText={{ href: '/', title: 'signin.signup' }}
      buttonText="signin.header"
    >
      <Input
        htmlFor="email"
        type="text"
        name="email"
        placeHolder="signin.email.placeholder"
        label="signin.email.title"
        error={formik.touched.email && formik.errors.email}
        onChange={formik.handleChange}
        value={formik.values.email}
        onClick={formik.setFieldTouched}
      />
      <Input
        htmlFor="password"
        type="text"
        isPassInput
        name="password"
        placeHolder="signin.password.placeholder"
        label="signin.password.title"
        onClick={formik.setFieldTouched}
        error={formik.touched.password && formik.errors.password}
        onChange={formik.handleChange}
        passShowMode={showPass}
        setPassShowMode={setShowPass}
        value={formik.values.password}
      />
    </AuthView>
  );
};

export default SignIn;
