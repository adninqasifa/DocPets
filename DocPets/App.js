import React from 'react';
import {StatusBar, View} from 'react-native';
import {Provider} from 'react-redux'
import Stackers from './src/navigation/Stackers';
import store from './src/store'

const App= () => {
  return (
    <Provider store={store}>
      <Stackers/>
    </Provider>
  );
};

export default App;
