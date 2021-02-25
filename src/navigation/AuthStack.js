import {createStackNavigator} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Center} from '../helper';
import {useDispatch, useSelector} from 'react-redux';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {logoutAction, signAction} from '../redux/action';
import {StackNav} from '.';
import {
  Body,
  Button,
  Container,
  Content,
  Footer,
  Form,
  Header,
  Icon,
  Input,
  Item,
  Label,
  Left,
  Right,
  Text,
} from 'native-base';
import {Grid, Row, Col} from 'react-native-easy-grid';

const Stack = createStackNavigator();

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState(null);
  console.log(username);
  return (
    <Container>
      <Grid>
        <Row
          style={{
            backgroundColor: 'rgb(255,212,0)',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          size={30}>
          <View style={{alignItems: 'center'}}>
            <Icon name="barcode" style={{fontSize: 200, color: 'maroon'}} />
          </View>
        </Row>
        <Row style={{backgroundColor: 'white', marginHorizontal: 20}} size={30}>
          <Col style={{justifyContent: 'space-between'}}>
            <View>
              <Form>
                <Item floatingLabel>
                  <Label>Username</Label>
                  <Input />
                </Item>
                <Item floatingLabel>
                  <Label>Password</Label>
                  <Input />
                </Item>
              </Form>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Button
                style={{
                  backgroundColor: 'rgba(0,0,0,0)',
                  borderRadius: 50,
                }}
                onPress={() => navigation.replace('Register')}>
                <Text style={{color: 'black'}}>Doesn't have an account?</Text>
              </Button>
              <Button
                style={{
                  backgroundColor: 'rgb(255,212,0)',
                  minWidth: Dimensions.get('screen').width / 4,
                  justifyContent: 'center',
                  borderRadius: 50,
                }}>
                <Text style={{color: 'black'}}>Login </Text>
              </Button>
            </View>
          </Col>
        </Row>
        <Row size={10} style={{alignItems: 'center'}}>
          <Col>
            <View style={{alignItems: 'center'}}>
              <Text style={{color: 'gray'}}>
                ----------------- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; or
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -----------------
              </Text>
            </View>
          </Col>
        </Row>
        <Row size={30}>
          <Col>
            <View style={{alignSelf: 'center'}}>
              <Button
                style={{
                  backgroundColor: '#1876F2',
                  minWidth: Dimensions.get('screen').width / 1.5,
                  justifyContent: 'center',
                  marginVertical: 4,
                  borderRadius: 50,
                }}>
                <Icon name="facebook" type="FontAwesome" />
                <Text>Login with facebook</Text>
              </Button>
              <Button
                style={{
                  backgroundColor: '#323131',
                  minWidth: Dimensions.get('screen').width / 1.5,
                  justifyContent: 'center',
                  marginVertical: 4,
                  borderRadius: 50,
                }}>
                <Icon name="github" type="FontAwesome" />
                <Text>Login with GitHub</Text>
              </Button>
            </View>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};
const RegisterScreen = ({navigation}) => {
  return (
    <Container>
      <Grid>
        <Row
          style={{
            backgroundColor: 'rgb(255,212,0)',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{alignItems: 'center'}}>
            <Icon name="barcode" style={{fontSize: 200, color: 'maroon'}} />
          </View>
        </Row>
        <Row
          style={{
            backgroundColor: 'white',
            marginHorizontal: 20,
            marginVertical: 50,
            paddingBottom: 50,
          }}>
          <Col style={{justifyContent: 'space-between'}}>
            <View>
              <Form>
                <Item>
                  <Icon name="heart" />
                  <Input placeholder="Username" />
                </Item>
                <Item>
                  <Icon name="mail" />
                  <Input placeholder="Email" />
                </Item>
                <Item>
                  <Icon name="lock-closed" />
                  <Input placeholder="Password" secureTextEntry />
                </Item>
                <Item>
                  <Icon name="lock-closed" />
                  <Input placeholder="Confirm Password" secureTextEntry />
                </Item>
              </Form>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Button
                style={{
                  backgroundColor: 'rgba(0,0,0,0)',
                  borderRadius: 50,
                }}
                onPress={() => navigation.replace('Login')}>
                <Text style={{color: 'black'}}>Have an account?</Text>
              </Button>
              <Button
                style={{
                  backgroundColor: 'rgb(255,212,0)',
                  minWidth: Dimensions.get('screen').width / 4,
                  justifyContent: 'center',
                  borderRadius: 50,
                }}>
                <Text style={{color: 'black'}}>Register </Text>
              </Button>
            </View>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};
const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <Center>
      <Text>ea</Text>
      <Button onPress={() => dispatch(logoutAction())}>
        <Text style={styles.textBtn}>logout</Text>
      </Button>
    </Center>
  );
};

const AuthStack = () => {
  const {isSignIn} = useSelector(({authReducer}) => authReducer);
  console.log(isSignIn);
  return (
    <Stack.Navigator headerMode="none">
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

const styles = StyleSheet.create({
  textBtn: {
    color: 'black',
  },
});

export default AuthStack;
