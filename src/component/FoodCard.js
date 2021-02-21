import React from 'react';
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import {deviceWidth} from '../helper';

const FoodCard = ({image, title}) => {
  return (
    <TouchableOpacity>
      <Image source={{uri: image}} style={styles.img} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  img: {
    height: deviceWidth / 2,
    width: deviceWidth / 2,
  },
});

export default FoodCard;
