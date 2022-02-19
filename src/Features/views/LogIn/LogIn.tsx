import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getAuthStatus, getCurrentUser } from '../../../Store/Selectors/auth';
import { login, registration, users } from '../../../Store/Slices/auth';

const LogIn: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(getCurrentUser);
  const isAuth = useSelector(getAuthStatus);
  const loginF = () => {
    dispatch(login(email, pass));
  };
  const regF = () => {
    dispatch(registration(email, pass));
  };

  useEffect(() => {
    if (isAuth && user.id) {
      history.push(`/user/${user.id}`);
    }
  }, [isAuth, user.id]);
  const getUserF = () => {
    dispatch(users());
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e: any) => setEmail(e.target.value)}
        value={email}
        placeholder="Email"
      />
      <input
        type="text"
        onChange={(e: any) => setPass(e.target.value)}
        value={pass}
        placeholder="Password"
      />
      <button onClick={loginF}>LOGIN</button>
      <button onClick={regF}>Registration</button>
      <button onClick={getUserF} style={{ width: '100vw', height: '50px' }}>
        GET USERS
      </button>
    </div>
  );
};

export default LogIn;
