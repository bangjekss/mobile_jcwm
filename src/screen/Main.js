import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  View,
} from 'react-native';
import {Center, deviceHeight, deviceWidth} from '../helper';
import {useDispatch, useSelector} from 'react-redux';
import {getMealAction} from '../redux/action';
import {FoodCard} from '../component';

const Main = () => {
  const dispatch = useDispatch();
  const {data, isLoading} = useSelector((state) => state.mealReducer);

  useEffect(() => {
    dispatch(getMealAction());
  }, []);
  useEffect(() => {}, [orientation]);

  const [orientation, setOrientation] = useState('portrait');
  const isPortrait = () => {
    return deviceHeight > deviceWidth;
  };
  Dimensions.addEventListener('change', () => {
    isPortrait() ? setOrientation('portrait') : setOrientation('landscape');
    if (orientation === 'portrait') {
      console.log(orientation);
      setNumColums(2);
    } else {
      console.log(orientation);
      setNumColums(4);
    }
  });
  const [numColums, setNumColums] = useState(2);

  const renderFoodCard = ({item}) => {
    return <FoodCard image={item.collection.image_url} />;
  };

  console.log(numColums);

  return (
    <Center>
      {isLoading ? (
        <ActivityIndicator size="large" color="orange" />
      ) : (
        <FlatList
          data={data}
          // renderItem={({item}) => (
          //   <FoodCard image={item.collection.image_url} />
          // )}
          renderItem={renderFoodCard}
          numColumns={numColums}
          keyExtractor={(item) => item.collection.collection_id.toString()}
        />
      )}
    </Center>
  );
};

export default Main;
