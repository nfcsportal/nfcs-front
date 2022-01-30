import React from 'react';
import { IntlProvider } from 'react-intl';

import { useDetectCurrentLocale } from './Hooks/useDetectCurrentLocale';
import Routes from './routes';

const App: React.FC = () => {
  const { currentLocale, currentMessages } = useDetectCurrentLocale();

  return (
    <>
      <IntlProvider locale={currentLocale} messages={currentMessages}>
        <Routes />
      </IntlProvider>
    </>
  );
};

export default App;
