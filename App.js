import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import reducer from './src/redux/reducer';
import {CartScreen, HomeScreen, ProductScreen, Todo} from './src/screen';
import {Header} from './src/component';
import {NavigationContainer} from '@react-navigation/native';
import {
  StackNav,
  TabNav,
  DrawerNav,
  MainNav,
  AuthStack,
  ProductStack,
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
        {/* <AuthStack /> */}
        {/* <HomeScreen /> */}
        {/* <ProductScreen /> */}
        <ProductStack />
        {/* <CartScreen /> */}
      </Provider>
    </NavigationContainer>
  );
};

export default App;
