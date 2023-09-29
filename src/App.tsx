/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import {Home} from './screens';
import {Providers} from './utils';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Providers>
        <Home />
      </Providers>
    </SafeAreaView>
  );
}

export default App;
