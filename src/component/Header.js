import React from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';
import {Icon} from 'react-native-elements';
import {deviceHeight} from '../helper';

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Icon name="account-circle" type="material" size={35} />
      </View>
      <View>
        <Text style={styles.textHeader}>Yuchase</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: Platform.OS == 'ios' ? 10 : 0,
    paddingHorizontal: 20,
    height: deviceHeight / 16,
    backgroundColor: 'orange',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textHeader: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default Header;
