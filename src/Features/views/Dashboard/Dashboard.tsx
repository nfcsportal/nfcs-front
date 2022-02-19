import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getAuthStatus, getCurrentUser } from '../../../Store/Selectors/auth';
import { checkAuth, logout, setCurrentUser, users } from '../../../Store/Slices/auth';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);
  const auth = useSelector(getAuthStatus);
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, []);

  const logoutF = () => {
    dispatch(logout());
    dispatch(setCurrentUser({}));
    history.push('/login');
  };

  const getUserF = () => {
    dispatch(users());
  };

  return (
    <>
      <button onClick={getUserF} style={{ width: '100vw', height: '50px' }}>
        GET USERS
      </button>
      {user.isActivated ? (
        <>
          <button onClick={logoutF} style={{ width: '100vw', height: '50px' }}>
            LOGOUT
          </button>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh',
              width: '100vw',
            }}
          >
            {auth ? <h1>AUTH OK STATU 200 User {user.email} </h1> : <h1>Please REG or LOGIN</h1>}
          </div>
        </>
      ) : (
        <div>Please activatge your account </div>
      )}
    </>
  );
};

export default Dashboard;
