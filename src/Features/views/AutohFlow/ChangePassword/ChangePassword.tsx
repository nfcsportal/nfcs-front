import { useFormik } from 'formik';
import React, { useState } from 'react';

import { RESET_PASS_INITIAL, TResetPass } from '../../../../Constants/authFLow';
import { ROUTES } from '../../../../Constants/Routes';
import { useAllowSubmit } from '../../../../Hooks/useAllowSubmitForm';
import { resetPasswordValidationScheme } from '../../../../Utils/validations';
import Input from '../../../atoms/Input';
import AuthView from '../../../organisms/AuthViews';

const ChangePassword: React.FC = () => {
  const [showNewPass, setShowNewPass] = useState<boolean>(false);
  const [showOldPass, setShowOldPass] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      ...RESET_PASS_INITIAL,
    },
    validationSchema: resetPasswordValidationScheme,
    onSubmit: (values: TResetPass) => {
      console.log(values);
    },
  });
  const allowSubmit = useAllowSubmit(formik, RESET_PASS_INITIAL);

  return (
    <AuthView
      submitHandler={formik.handleSubmit}
      allowSubmit={allowSubmit}
      header="changePassword.title"
      bottomText="changePassword.returnto"
      bottomLinkedText={{ href: ROUTES.SIGN_IN, title: 'changePassword.signin' }}
      buttonText="changePassword.button"
    >
      <Input
        htmlFor="oldPass"
        type="text"
        isPassInput
        name="oldPass"
        placeHolder="changePassword.oldpass.placeholder"
        label="changePassword.oldpass.title"
        onClick={formik.setFieldTouched}
        error={formik.touched.oldPass && formik.errors.oldPass}
        onChange={formik.handleChange}
        passShowMode={showOldPass}
        setPassShowMode={setShowOldPass}
        value={formik.values.oldPass}
      />
      <Input
        htmlFor="newPass"
        type="text"
        isPassInput
        name="newPass"
        placeHolder="changePassword.newpass.placeholder"
        label="changePassword.newpass.title"
        onClick={formik.setFieldTouched}
        error={formik.touched.newPass && formik.errors.newPass}
        onChange={formik.handleChange}
        passShowMode={showNewPass}
        setPassShowMode={setShowNewPass}
        value={formik.values.newPass}
      />
    </AuthView>
  );
};

export default ChangePassword;
