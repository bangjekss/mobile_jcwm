import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const CategoryCard = (props) => {
  return (
    <View style={styles.categoryWrapper}>
      <Text style={styles.categoryText}>{props.categoryName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryText: {
    fontSize: 20,
  },
  categoryWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    width: 150,
    height: 100,
    backgroundColor: 'white',
  },
});

export default CategoryCard;
