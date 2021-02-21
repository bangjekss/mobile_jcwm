import React, {useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {Center, deviceHeight, deviceWidth} from '../helper';

// EXERCISE
// Create A Todo App

// user dapat input todo
// user dapat melihat semua todo yang dia input
// user dapat cancel todo yang dia input
// user dapat set todo menjadi done
// toggle untuk melihat yang done dan belum selesai

// const

const todoList = () => {};

const Todo = () => {
  const [list, setList] = useState(['a', 'b', 'c']);

  const handleAddBtn = () => {};
  return (
    <View>
      <Text>Todo App</Text>
      <View style={styles.addBtn}>
        <Button title="Add Task" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  addBtn: {
    marginTop: 100,
    // backgroundColor: 'black',
  },
});

export default Todo;
