import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Center} from '../helper';
import faker from 'faker';
import {Button} from 'react-native-elements';

const dataArr = [
  {
    name: 'Salad',
    price: 5,
  },
  {
    name: 'Pizza',
    price: 5,
  },
  {
    name: 'Ball',
    price: 5,
  },
  {
    name: 'Fish',
    price: 5,
  },
  {
    name: 'Fish',
    price: 5,
  },
  {
    name: 'Fish',
    price: 5,
  },
  {
    name: 'Fish',
    price: 5,
  },
];

const CartScreen = () => {
  const {cart} = useSelector(({cartReducer}) => cartReducer);
  console.log(cart);
  const [data, setData] = useState(
    [],
    // Array.from(Array(20), () => faker.commerce.product()),
  );
  // useSelector(() => setData(cart), []);
  return (
    <>
      <View style={styles.mainContainer}>
        <FlatList
          data={dataArr}
          renderItem={({item}) => (
            <View style={styles.container}>
              <View style={styles.leftContainer}>
                <View style={styles.imageContainer}>
                  <Image
                    source={{
                      uri:
                        'https://cdn-brilio-net.akamaized.net/community/2018/09/12/13793/ayo-nikmati-apel-rebus-yang-ternyata-sangat-baik-untuk-kesehatan.jpg',
                    }}
                    style={styles.image}
                  />
                </View>
              </View>
              <View style={styles.rightContainer}>
                <View style={styles.nameContainer}>
                  <Text style={styles.itemList}>{item.name}</Text>
                </View>
                <View style={styles.dataContainer}>
                  <View style={styles.priceContainer}>
                    <Text style={styles.itemList}>${item.price}</Text>
                  </View>
                  <View style={styles.qtyContainer}>
                    <Button
                      title="+"
                      titleStyle={{color: 'black'}}
                      buttonStyle={styles.qtyBtn}
                    />
                    <View style={styles.qty}>
                      <Text>2</Text>
                    </View>
                    <Button
                      title="-"
                      titleStyle={{color: 'black'}}
                      buttonStyle={styles.qtyBtn}
                    />
                  </View>
                </View>
              </View>
            </View>
          )}
          // keyExtractor={item.key}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
  },
  container: {
    // height: Dimensions.get('screen').height / 5,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: 'rgb(250, 200, 0)',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 0,
    marginRight: 10,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  imageContainer: {
    // flex: 3,
  },
  image: {
    width: Dimensions.get('screen').width / 4,
    height: Dimensions.get('screen').width / 4,
    borderRadius: 20,
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  priceContainer: {
    flex: 4,
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 6,
    justifyContent: 'space-between',
  },

  qtyBtn: {
    width: Dimensions.get('screen').width / 10,
    height: Dimensions.get('screen').width / 10,
    backgroundColor: 'rgb(255, 185, 0)',
  },

  qty: {
    backgroundColor: 'white',
    width: Dimensions.get('screen').width / 10,
    height: Dimensions.get('screen').width / 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CartScreen;
