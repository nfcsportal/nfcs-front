import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CHNAGE_PASS_INITIAL, TChnagePassword } from '../../../../Constants/authFLow';
import { ROUTES } from '../../../../Constants/Routes';
import { useAllowSubmit } from '../../../../Hooks/useAllowSubmitForm';
import { getCurrentUser } from '../../../../Store/Selectors/auth';
import { changePassword } from '../../../../Store/Slices/auth';
import { changePasswordValidationScheme } from '../../../../Utils/validations';
import Input from '../../../atoms/Input';
import AuthView from '../../../organisms/AuthViews';

const ChangePassword: React.FC = () => {
  const [showNewPass, setShowNewPass] = useState<boolean>(false);
  const [showOldPass, setShowOldPass] = useState<boolean>(false);
  const currentUser = useSelector(getCurrentUser);

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      ...CHNAGE_PASS_INITIAL,
    },
    validationSchema: changePasswordValidationScheme,
    onSubmit: (values: TChnagePassword) => {
      dispatch(changePassword(values.oldPass, values.newPass, currentUser.email));
    },
  });
  const allowSubmit = useAllowSubmit(formik, CHNAGE_PASS_INITIAL);

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
        onFocus={formik.setFieldTouched}
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
        onFocus={formik.setFieldTouched}
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
