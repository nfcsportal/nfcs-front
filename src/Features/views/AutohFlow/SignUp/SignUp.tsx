import { useFormik } from 'formik';
import React, { useMemo, useState } from 'react';

import Disclaimer from '../../../../Components/Multiusable/PortalCircle/Disclaimer';
import { SIGN_UP_INITIAL, TSignUpValues } from '../../../../Constants/authFLow';
import { ROUTES } from '../../../../Constants/Routes';
import { useAllowSubmit } from '../../../../Hooks/useAllowSubmitForm';
import { signUpValidationSchema } from '../../../../Utils/validations';
import Input from '../../../atoms/Input';
import AuthView from '../../../organisms/AuthViews';

const SignUp: React.FC = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showRepeatPass, setShowRepeatPass] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      ...SIGN_UP_INITIAL,
    },
    validationSchema: signUpValidationSchema,
    onSubmit: (values: TSignUpValues) => {
      console.log(values);
    },
  });
  const validationValues = useMemo(() => {
    return {
      email: SIGN_UP_INITIAL.email,
      password: SIGN_UP_INITIAL.password,
      passwordConfirmation: SIGN_UP_INITIAL.passwordConfirmation,
    };
  }, []);

  const allowSubmit = useAllowSubmit(formik, validationValues);

  return (
    <AuthView
      submitHandler={formik.handleSubmit}
      allowSubmit={allowSubmit}
      header="signup.header"
      bottomText="signup.alreadyhaveacoount"
      bottomLinkedText={{ href: ROUTES.SIGN_IN, title: 'signup.signin' }}
      buttonText="signup.header"
    >
      <Input
        htmlFor="email"
        type="text"
        name="email"
        placeHolder="signup.email.placeholder"
        label="signup.email.title"
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
        placeHolder="signup.password.placeholder"
        label="signup.password.title"
        isTruthyEqual={{
          touched: formik.touched.password || false,
          error: formik.errors.password || '',
        }}
        onClick={formik.setFieldTouched}
        error={formik.touched.password && formik.errors.password}
        onChange={formik.handleChange}
        passShowMode={showPass}
        repeatMode
        setPassShowMode={setShowPass}
        value={formik.values.password}
      />
      <Input
        htmlFor="passwordConfirmation"
        type="text"
        isPassInput
        name="passwordConfirmation"
        placeHolder="signup.password.repeate.placeholder"
        label="signup.password.repeate.title"
        repeatMode
        isTruthyEqual={{
          touched: formik.touched.passwordConfirmation || false,
          error: formik.errors.passwordConfirmation || '',
        }}
        onClick={formik.setFieldTouched}
        error={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
        onChange={formik.handleChange}
        passShowMode={showRepeatPass}
        setPassShowMode={setShowRepeatPass}
        value={formik.values.passwordConfirmation}
      />
      <Disclaimer onChange={formik.setFieldValue} name="disclaimer" />
    </AuthView>
  );
};

export default SignUp;
