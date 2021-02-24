import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Center} from '../helper';
import faker from 'faker';

const dataArr = [
  {
    nama: 'ball',
    price: 5,
  },
  {
    nama: 'pizza',
    price: 5,
  },
  {
    nama: 'towel',
    price: 5,
  },
];

const CartScreen = () => {
  const {cart} = useSelector(({cartReducer}) => cartReducer);

  const [data, setData] = useState(
    Array.from(Array(20), () => faker.commerce.product()),
  );

  // useEffect(() => {
  //   setData(
  //     Array.from(Array(20), () => {
  //     }),
  //   );
  // }, []);
  console.log(data);
  console.log(dataArr);
  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={dataArr}
        renderItem={({item}) => (
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Text style={styles.itemList}>gambar</Text>
            </View>
            <View>
              <Text style={styles.itemList}>{item.nama}</Text>
            </View>
          </View>
        )}
        // keyExtractor={item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height / 10,
    margin: 5,
    backgroundColor: 'rgb(250, 200, 0)',
    borderRadius: 20,
    padding: 10,
  },
});

export default CartScreen;
