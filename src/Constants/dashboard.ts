import React from 'react';

import BuyAnalytic from '../Features/organisms/BuyAnalytic';
import ForecastList from '../Features/organisms/ForecastList';
import MyPromocode from '../Features/organisms/MyPromocode';
import Settings from '../Features/organisms/Settings';

export const DASHBOARD_SLIDES = {
  buyAnalytic: 'buyAnalytic',
  forecastList: 'forecastList',
  myPromocode: 'myPromocode',
  settings: 'settings',
};

export const DASHBOARD: Record<string, React.FC> = {
  buyAnalytic: BuyAnalytic,
  forecastList: ForecastList,
  myPromocode: MyPromocode,
  settings: Settings,
};
