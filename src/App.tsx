import React from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';

import logo from '../src/Assets/images/logo.svg';
import { LOCALES } from './Constants/Locales';
// import Routes from './routes';
import { getCurrentLocale } from './Store/Selectors/main';

const App: React.FC = () => {
  const currentLocale = useSelector(getCurrentLocale);
  console.log(logo);

  return (
    <>
      <IntlProvider locale={currentLocale} messages={LOCALES[currentLocale]}>
        <div className="soon">
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="comingSoon">Coming Soon ...</div>
        </div>
        {/* <Routes /> */}
      </IntlProvider>
    </>
  );
};

export default App;
