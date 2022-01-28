import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AboutUs from './Features/views/AboutUs';
import HomePage from './Features/views/HomePage';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
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
