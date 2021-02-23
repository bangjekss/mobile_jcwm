import React from 'react';
import {
  Pressable,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Center} from '../helper';

const FoodList = ({navigation, item}) => {
  // console.log(props);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ProductDetail', {
          productName: item,
          price: Math.floor(Math.random() * 10),
        })
      }>
      <View>
        <Text style={styles.text}>{item}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default FoodList;
