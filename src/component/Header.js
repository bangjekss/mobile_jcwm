import React from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';
import {deviceHeight} from '../helper';

console.log(Platform);
const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textHeader}>TO DO LIST</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: Platform.OS == 'ios' ? 10 : 0,
    height: deviceHeight / 16,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
