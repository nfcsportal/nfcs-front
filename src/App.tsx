import React, { Suspense } from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';

import Modals from './Components/Multiusable/Modals';
import { LOCALES } from './Constants/Locales';
import ActionalModals from './Features/organisms/ActionalModals/ActionalModals';
import Routes from './routes';
import { getCurrentLocale } from './Store/Selectors/main';

const App: React.FC = () => {
  const currentLocale = useSelector(getCurrentLocale);
  return (
    <div>
      <IntlProvider locale={currentLocale} messages={LOCALES[currentLocale]}>
        <Modals />
        <ActionalModals />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes />
        </Suspense>
      </IntlProvider>
    </div>
  );
};

export default App;
