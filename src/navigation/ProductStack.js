import {createStackNavigator} from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import {} from 'react-native';
import {ProfileDrawer} from '.';
import {HomeScreen, ProductScreen} from '../screen';

const Stack = createStackNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home Screen" headerMode="none">
      <Stack.Screen name="Home Screen" component={ProfileDrawer} />
      <Stack.Screen name="Product Screen" component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default ProductStack;
