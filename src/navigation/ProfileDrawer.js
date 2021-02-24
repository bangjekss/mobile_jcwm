import {createDrawerNavigator} from '@react-navigation/drawer';
import React, {useState, useEffect} from 'react';
import {} from 'react-native';
import {Center} from '../helper';
import {CartScreen, HomeScreen} from '../screen';

const Drawer = createDrawerNavigator();

const ProfileDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home Screen" component={HomeScreen} />
      <Drawer.Screen name="Cart Screen" component={CartScreen} />
    </Drawer.Navigator>
  );
};

export default ProfileDrawer;
