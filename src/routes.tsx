import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import AboutUs from './Features/views/AboutUs';
import ChangePassword from './Features/views/AutohFlow/ChangePassword';
import ForgotPassword from './Features/views/AutohFlow/ForgotPassword';
import ResetPassword from './Features/views/AutohFlow/ResetPassword';
import SignIn from './Features/views/AutohFlow/SignIn';
import SignUp from './Features/views/AutohFlow/SignUp';
import Contact from './Features/views/Contact';
import CurrentAnalytic from './Features/views/CurrentAnalytic';
import Dashboard from './Features/views/Dashboard';
import HomePage from './Features/views/HomePage';
import Privacy from './Features/views/Privacy';
import { getCurrentUser } from './Store/Selectors/auth';

const Routes: React.FC = () => {
  const currentUser = useSelector(getCurrentUser);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/forgot-pass">
          <ForgotPassword />
        </Route>
        <Route path="/change-password">
          {!Object.entries(currentUser).length && !currentUser.isActivated && <Redirect to="/" />}
          <ChangePassword />
        </Route>
        <Route path="/reset-password/:id">
          <ResetPassword />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/description/:current">
          <CurrentAnalytic />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
