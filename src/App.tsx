/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { Home } from './screens';
import { Providers } from './utils';

function App(): JSX.Element {
  return (
    <Providers>
      <Home />
    </Providers>
  );
}

export default App;
