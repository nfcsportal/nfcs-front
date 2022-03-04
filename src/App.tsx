import React, { Suspense } from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';

import { LOCALES } from './Constants/Locales';
import Routes from './routes';
import { getCurrentLocale } from './Store/Selectors/main';

const App: React.FC = () => {
  const currentLocale = useSelector(getCurrentLocale);

  return (
    <>
      <IntlProvider locale={currentLocale} messages={LOCALES[currentLocale]}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes />
        </Suspense>
      </IntlProvider>
    </>
  );
};

export default App;
