import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AboutUs from './Features/views/AboutUs';
import ChangePassword from './Features/views/AutohFlow/ChangePassword';
import ForgotPassword from './Features/views/AutohFlow/ForgotPassword';
import SignIn from './Features/views/AutohFlow/SignIn';
import SignUp from './Features/views/AutohFlow/SignUp';
import CurrentAnalytic from './Features/views/CurrentAnalytic';
import Dashboard from './Features/views/Dashboard';
import HomePage from './Features/views/HomePage';
import Privacy from './Features/views/Privacy';

const Routes: React.FC = () => {
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
        <Route path="/change-pass">
          <ChangePassword />
        </Route>
        <Route path="/user/:id">
          <Dashboard />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/current-analytic">
          <CurrentAnalytic />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
