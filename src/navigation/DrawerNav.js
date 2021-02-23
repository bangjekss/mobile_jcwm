import React from 'react';
import {Button, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Header} from '../component';
import {Center} from '../helper';
import {TabNav} from '.';

const Drawer = createDrawerNavigator();

const Home = (props) => {
  const {navigation} = props;
  return (
    <View>
      <Header />
      <Text>Home</Text>
      <Button title="open" onPress={navigation.openDrawer} />
      <Button title="close" onPress={() => navigation.closeDrawer()} />
      <Button title="toggle" onPress={navigation.toggleDrawer} />
      <Button title="jump to" onPress={() => navigation.jumpTo('settings')} />
      <Center></Center>
    </View>
  );
};

const Logout = (props) => {
  return (
    <Center>
      <Text>logout</Text>
    </Center>
  );
};

const DrawerNav = () => {
  return (
    <Drawer.Navigator initialRouteName="home" drawerPosition="left">
      <Drawer.Screen name="Profile" component={TabNav} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
