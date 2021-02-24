import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {PricingCard} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {Center} from '../helper';
import {addToCartAction} from '../redux/action';

const ProductScreen = ({route}) => {
  const {name, price} = route.params;
  const dispatch = useDispatch();

  const handleAddBtn = () => {
    dispatch(addToCartAction({name, price}));
    Alert.alert('Successfully add to cart');
  };

  return (
    <Center>
      <PricingCard
        color="rgb(250,200,0)"
        title={name}
        price={`$${price}`}
        button={{title: 'Add to Cart'}}
        onButtonPress={handleAddBtn}
        containerStyle={{width: 300}}
      />
    </Center>
  );
};

export default ProductScreen;
