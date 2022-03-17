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
        <Route exact path="/sign-in">
          <SignIn />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
        <Route exact path="/forgot-pass">
          <ForgotPassword />
        </Route>
        <Route exact path="/change-password">
          {!Object.entries(currentUser).length && !currentUser.isActivated && <Redirect to="/" />}
          <ChangePassword />
        </Route>
        <Route exact path="/reset-password/:id">
          <ResetPassword />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/about">
          <AboutUs />
        </Route>
        <Route exact path="/description/:current">
          <CurrentAnalytic />
        </Route>
        <Route exact path="/privacy">
          <Privacy />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
