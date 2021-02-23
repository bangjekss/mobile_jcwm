import React from 'react';
import {Text, View, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Center} from '../helper';
import {Icon} from 'react-native-elements';
import {DrawerNav, StackNav} from '.';

const Tab = createBottomTabNavigator();

const Home = (props) => {
  return (
    <Center>
      <Text>Home</Text>
      <Button
        title="switch to setting"
        onPress={() => props.navigation.jumpTo('Setting')}
      />
    </Center>
  );
};
const Settings = () => {
  return (
    <Center>
      <Text>Setting</Text>
      <DrawerNav />
    </Center>
  );
};

const TabNav = () => {
  const screenOptions = ({route}) => ({
    tabBarIcon: ({color}) => {
      let iconName;
      if (route.name === 'Home') iconName = 'home';
      if (route.name === 'Settings') iconName = 'settings';
      return <Icon name={iconName} type="material" size={30} color={color} />;
    },
  });
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={StackNav}
        options={{title: 'Beranda'}}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{title: 'Pengaturan'}}
      />
    </Tab.Navigator>
  );
};

export default TabNav;
