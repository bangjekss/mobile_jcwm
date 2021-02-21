import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import reducer from './src/redux/reducer';
import {Todo} from './src/screen';
import {Header} from './src/component';
import {NavigationContainer} from '@react-navigation/native';
import {Main} from './src/navigation';

const store = configureStore({
  reducer,
});

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <Header />
      <Todo /> */}
        <Main />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
