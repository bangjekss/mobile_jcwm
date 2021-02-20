import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const FoodCard = ({image, title}) => {
  return (
    <View>
      <Image source={{uri: image}} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 150,
    width: 150,
  },
});

export default FoodCard;
