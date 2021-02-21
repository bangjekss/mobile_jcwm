import React from 'react';
import {
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import {Center} from '../helper';
import {createStackNavigator} from '@react-navigation/stack';
import faker from 'faker';
import {useDispatch, useSelector} from 'react-redux';
import {addToCartAction} from '../redux/action';

const ProductList = (props) => {
  const {navigation} = props;
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ProductDetail', {
            productName: item,
            price: Math.floor(Math.random() * 100),
          })
        }>
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
    );
  };
  const renderCardBtn = () => {
    return <Button title="cart" onPress={() => navigation.navigate('Cart')} />;
  };
  return (
    <FlatList
      ListHeaderComponent={renderCardBtn}
      data={Array.from(Array(50), () => faker.commerce.product())}
      renderItem={renderItem}
    />
  );
};

const ProductDetail = (props) => {
  const {navigation} = props;
  const dispatch = useDispatch();
  console.log(props);
  const {productName, price} = props.route.params;
  const handleAddToCart = () => {
    dispatch(
      addToCartAction({
        productName,
        price,
        id: new Date().getTime(),
      }),
    );
    navigation.goBack();
  };
  return (
    <Center>
      <Text>{productName}</Text>
      <Text>price : ${price}</Text>
      <Button title="add to cart" onPress={handleAddToCart} />
    </Center>
  );
};

const Cart = (props) => {
  const {cart} = useSelector(({cartReducer}) => cartReducer);
  const renderItem = ({item}) => {
    return (
      <View>
        <Text>
          {item.productName} | ${item.price}
        </Text>
      </View>
    );
  };
  return <FlatList data={cart} renderItem={renderItem} />;
};

const Stack = createStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="ProductList">
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default Main;
