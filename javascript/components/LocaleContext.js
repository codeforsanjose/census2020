import React from 'react';

let currentLocale = 'en';

export default React.createContext({
  currentLocale,
  setLocale: (locale) => { currentLocale = locale; }
});
