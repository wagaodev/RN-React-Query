/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { Home } from './screens';
import { Providers } from './helpers';

if (__DEV__) {
  import('../ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

function App(): JSX.Element {
  return (
    <Providers>
      <Home />
    </Providers>
  );
}

export default App;
