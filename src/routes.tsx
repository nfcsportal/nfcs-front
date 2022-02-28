import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AboutUs from './Features/views/AboutUs';
import SignIn from './Features/views/AutohFlow/SignIn';
import Dashboard from './Features/views/Dashboard';
import HomePage from './Features/views/HomePage';
import LogIn from './Features/views/LogIn';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-up">
          <SignIn />
        </Route>
        <Route path="/sign-in">
          <LogIn />
        </Route>
        <Route path="/user/:id">
          <Dashboard />
        </Route>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
