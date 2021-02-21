import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import reducer from './src/redux/reducer';
import {Todo} from './src/screen';
import {Header} from './src/component';

const store = configureStore({
  reducer,
});

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Todo />
    </Provider>
  );
};

export default App;
