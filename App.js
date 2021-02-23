import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import reducer from './src/redux/reducer';
import {Todo} from './src/screen';
import {Header} from './src/component';
import {NavigationContainer} from '@react-navigation/native';
import {
  StackNav,
  TabNav,
  DrawerNav,
  MainNav,
  AuthStack,
} from './src/navigation';

const store = configureStore({
  reducer,
});

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        {/* <Header />
      <Todo /> */}
        {/* <StackNav /> */}
        {/* <TabNav /> */}
        {/* <DrawerNav /> */}
        {/* <MainNav /> */}
        <AuthStack />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
