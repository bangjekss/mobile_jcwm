import React from 'react';
import {Button, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Header} from '../component';
import {Center} from '../helper';

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

const Settings = (propsr) => {
  return (
    <View>
      <Text>setting</Text>
    </View>
  );
};

const DrawerNav = () => {
  return (
    <Drawer.Navigator initialRouteName="home" drawerPosition="right">
      <Drawer.Screen
        name="home"
        component={Home}
        options={{title: 'ea'}}></Drawer.Screen>
      <Drawer.Screen name="settings" component={Settings}></Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNav;
