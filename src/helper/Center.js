import React from 'react';
import {View, StyleSheet} from 'react-native';

const Center = ({children}) => {
  return <View style={styles.mainContainer}>{children}</View>;
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Center;
