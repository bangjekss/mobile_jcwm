import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {StackNav} from '.';
import {Center} from '../helper';

const MainNav = () => {
  const [text, setText] = useState(null);
  const [username, setUsername] = useState(null);
  return (
    <>
      {username ? (
        <>
          <Center>
            <Text>Logged in, hi {username}</Text>
            <Button title="logout" onPress={() => setUsername(null)} />
          </Center>
          <StackNav />
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
