import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Header, ListItem, SearchBar} from 'react-native-elements';
import {Center} from '../helper';
import faker from 'faker';

const HomeScreen = ({navigation}) => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(
    () => setProduct(Array.from(Array(20), () => faker.commerce.product())),
    [],
  );

  const handleSearch = (e) => {
    setSearch(e);
    const newFilter = product.filter((value) => value.includes(search));
    console.log(search);
    console.log(newFilter);
    setProduct(newFilter);
  };

  const leftComponent = {
    icon: 'menu',
    color: 'black',
    onPress: () => navigation.toggleDrawer(),
  };

  const renderItem = ({item, index}) => {
    return item.toLowerCase().includes(search.toLowerCase()) ? (
      <ListItem
        bottomDivider
        key={index}
        onPress={() =>
          navigation.navigate('Product Screen', {
            name: item,
            price: Math.floor(Math.random() * 100),
          })
        }>
        <ListItem.Content>
          <ListItem.Title>{item}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    ) : (
      <Text>eas</Text>
    );
  };

  return (
    <View>
      <Header
        centerComponent={{text: 'App', style: {color: 'black'}}}
        leftComponent={leftComponent}
        containerStyle={{backgroundColor: 'rgb(255, 202, 0)'}}
      />
      <SearchBar
        value={search}
        onChangeText={handleSearch}
        placeholder="search"
        containerStyle={{
          backgroundColor: 'rgb(255, 210, 0)',
          borderColor: 'orange',
        }}
        inputContainerStyle={{backgroundColor: 'white'}}
      />
      <FlatList data={product} renderItem={renderItem} />
    </View>
  );
};

export default HomeScreen;
