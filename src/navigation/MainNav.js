import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {DrawerNav, StackNav, TabNav} from '.';
import {Center} from '../helper';

const MainNav = () => {
  const [text, setText] = useState(null);
  const [username, setUsername] = useState(null);
  return (
    <>
      {!username ? (
        <>
          {/* <View>
            <Text>Logged in, hi {username}</Text>
            <Button title="logout" onPress={() => setUsername(null)} />
          </View> */}
          <DrawerNav />
        </>
      ) : (
        <Center>
          <TextInput
            placeholder="username..."
            onChangeText={(e) => setText(e)}
          />
          <Button title="login" onPress={() => setUsername(text)} />
        </Center>
      )}
    </>
  );
};

export default MainNav;
