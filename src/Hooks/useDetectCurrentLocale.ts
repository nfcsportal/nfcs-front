import React, { useEffect, useState } from 'react';

import german from '../Assets/Locales/de.json';
import english from '../Assets/Locales/en.json';
import french from '../Assets/Locales/fr.json';
import { mainReducer, MainState } from '../Reducers/mainReducer';
import { JSONObject } from '../Types/global';

export const useDetectCurrentLocale = () => {
  const [state] = React.useReducer(mainReducer, MainState);

  const [currentLocale, setCurrentLocale] = useState<JSONObject>(english);

  useEffect(() => {
    if (state.locale === 'en') {
      setCurrentLocale(english);
    }
    if (state.locale === 'de') {
      setCurrentLocale(german);
    }
    if (state.locale === 'fr') {
      setCurrentLocale(french);
    }
  }, [state]);
  return {
    currentLocale: state.locale,
    currentMessages: currentLocale,
  };
};
