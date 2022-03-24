import React from 'react';

import DashboardFooter from '../../moleculs/DashboardFooter';
import DashboardSideBar from '../../moleculs/DashboardSideBar';
import Header from '../../moleculs/Header';
import MyPromocode from '../../organisms/MyPromocode';
import Settings from '../../organisms/Settings';

// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import Loader from '../../../Components/Multiusable/Loader';
// import { ROUTES } from '../../../Constants/Routes';
// import { getAuthStatus, getCurrentUser } from '../../../Store/Selectors/auth';
// import { getDashboardLoading } from '../../../Store/Selectors/dashboard';
// import { checkAuth, logout, setCurrentUser, users } from '../../../Store/Slices/auth';
// import Button from '../../atoms/Button';
// import styles from './dashboard.module.scss';

const Dashboard: React.FC = () => {
  // const dispatch = useDispatch();
  // const user = useSelector(getCurrentUser);
  // const auth = useSelector(getAuthStatus);
  // const history = useHistory();
  // const loading = useSelector(getDashboardLoading);

  // const handleLogout = () => {
  //   dispatch(logout());
  //   dispatch(setCurrentUser({}));
  //   history.push(ROUTES.HOME);
  // };

  // useEffect(() => {
  //   if (!auth) {
  //     dispatch(checkAuth(history));
  //   }
  // }, []);

  // useEffect(() => {
  //   if (Object.entries(user).length) {
  //     dispatch(users(user.id));
  //   }
  // }, [user]);

  return (
    <div>
      <Header />
      <DashboardSideBar />
      Settings or Promocode NAR JAN SETTINGSY KAM PROMOCODY OR SARQES MEKY COMMENT ARA MYUSYIN ANCI
      <Settings />
      <MyPromocode />
      <DashboardFooter />
      {/* {loading && (
        <div className={styles.loader}>
          {' '}
          <Loader type="auth" />
        </div>
      )}
      <div>
        <h1>{user.email}</h1>
        <h1>{user.id}</h1>
        <Button type="secondary" defaultMessage="LOGOUT" onClick={handleLogout} />
        <Button
          type="secondary"
          defaultMessage="CHANGE PASS"
          onClick={() => history.push('/change-password')}
        />
      </div> */}
    </div>
  );
};

export default Dashboard;
