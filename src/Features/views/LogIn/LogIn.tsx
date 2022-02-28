/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import ClosedEyeSvg from '../../../Assets/Icons/ClosedEyeSvg';
import LogoSvg from '../../../Assets/Icons/LogoSvg';
import { getAuthStatus, getCurrentUser } from '../../../Store/Selectors/auth';
import { login, registration, users } from '../../../Store/Slices/auth';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import MainContent from '../../organisms/MainContent';
import styles from './login.module.scss';

const LogIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(getCurrentUser);
  const isAuth = useSelector(getAuthStatus);

  useEffect(() => {
    if (isAuth && user.id) {
      history.push(`/user/${user.id}`);
    }
  }, [isAuth, user.id]);

  return (
    <div className={`${styles.loginPage} page`}>
      <header className={styles.loginHeader}>
        <a href="#">
          <LogoSvg />
        </a>
      </header>
      <MainContent>
        <section className={styles.loginSection}>
          <div className={styles.loginForm}>
            <form action="">
              <h2 className={styles.loginTitle}>Sign In</h2>
              <div className={styles.formItems}>
                <Input
                  htmlFor="asaas"
                  type="text"
                  name="asdasd"
                  isPassInput={true}
                  placeHolder="asjkdaskld"
                  label="asas"
                  onChange={() => console.log('askjdkasd')}
                  onClick={() => console.log('askjdkasd')}
                  value="asldkal/sd"
                />
                <Input
                  name="asdasd"
                  onClick={() => console.log('askjdkasd')}
                  htmlFor="asaas"
                  type="text"
                  isPassInput={true}
                  placeHolder="asjkdaskld"
                  label="asas"
                  onChange={() => console.log('askjdkasd')}
                  value="asldkal/sd"
                />
              </div>
              <div className={styles.forgotBtn}>
                <a href="#">Forgot Password?</a>
              </div>
              <Button
                customClass={styles.loginBtn}
                submit
                type="primary"
                defaultMessage="Sign in"
              />
            </form>
            <div className={styles.dontHaveAccount}>
              <p>
                Don’t have an account? <a href="#">Sign Up</a>
              </p>
            </div>
          </div>

          {/* <button onClick={loginF}>LOGIN</button> */}
          {/* <button onClick={regF}>Registration</button> */}
          {/* <button onClick={getUserF} style={{ width: '100vw', height: '50px' }}>
            GET USERS
          </button> */}
        </section>
      </MainContent>
    </div>
  );
};

export default LogIn;
