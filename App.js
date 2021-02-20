import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableNativeFeedbackComponent,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import {categories, collections} from './src/sample';
import {CategoryCard, FoodCard} from './src/component';

const App = () => {
  useEffect(() => console.log(collections.collections), []);
  return (
    <View style={styles.mainContainer}>
      <View>
        {/* <FlatList
          refreshing
          data={categories.categories}
          renderItem={({item}) => (
            <TouchableOpacity>
              <CategoryCard categoryName={item.categories.name} />
            </TouchableOpacity>
          )}
        /> */}
        <FlatList
          onRefresh={() => console.log('ea')}
          refreshing={false}
          data={collections.collections}
          renderItem={({item}) => (
            <TouchableOpacity>
              {/* <Text>{item.collection.title}</Text> */}
              <FoodCard
                image={item.collection.image_url}
                title={item.collection.title}
              />
            </TouchableOpacity>
          )}
        />
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'rgb(250, 202, 0)',
  },
});

export default App;
