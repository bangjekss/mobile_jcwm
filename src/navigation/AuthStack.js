import {createStackNavigator} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Center} from '../helper';
import {Button, Text} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {TextInput} from 'react-native';
import {logoutAction, signAction} from '../redux/action';
import {StackNav} from '.';

const Stack = createStackNavigator();

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState(null);
  console.log(username);
  return (
    <Center>
      <Text>login</Text>
      <TextInput onChangeText={(e) => setUsername(e)} />

      <Button title="sign in" onPress={() => dispatch(signAction(username))} />
      <Button title="sign up" onPress={() => navigation.replace('Register')} />
    </Center>
  );
};
const RegisterScreen = ({navigation}) => {
  return (
    <Center>
      <Text>Register</Text>
      <Button title="sign in" onPress={() => navigation.replace('Login')} />
    </Center>
  );
};
const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <Center>
      <Text>ea</Text>
      <Button title="logout" onPress={() => dispatch(logoutAction())} />
    </Center>
  );
};

const AuthStack = () => {
  const {isSignIn} = useSelector(({authReducer}) => authReducer);
  console.log(isSignIn);
  return (
    <Stack.Navigator>
      {isSignIn ? (
        <>
          <Stack.Screen name="Home" component={StackNav} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AuthStack;
