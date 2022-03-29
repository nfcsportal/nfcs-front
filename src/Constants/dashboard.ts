import React from 'react';

import BuyAnalytic from '../Features/organisms/BuyAnalytic';
import MyPromocode from '../Features/organisms/MyPromocode';
import Settings from '../Features/organisms/Settings';

export const DASHBOARD_SLIDES = {
  buyForecast: 'buyForecast',
  forecastList: 'forecastList',
  myPromocode: 'myPromocode',
  settings: 'settings',
};

export const DASHBOARD: Record<string, React.FC> = {
  buyForecast: BuyAnalytic,
  forecastList: BuyAnalytic,
  myPromocode: MyPromocode,
  settings: Settings,
};
