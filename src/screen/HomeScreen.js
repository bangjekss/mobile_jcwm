import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Header, ListItem, SearchBar} from 'react-native-elements';
import {Center} from '../helper';
import faker from 'faker';

const HomeScreen = ({navigation}) => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // setProduct([]);
    setProduct(Array.from(Array(10), () => faker.commerce.product()));
    console.log(product);
  }, []);

  const handleSearch = (e) => {
    setSearch(e);
    // const newFilter = product.filter((value) => value.includes(search));
    // console.log(search);
    // console.log(newFilter);
    // setProduct(newFilter);
  };

  const leftComponent = {
    icon: 'menu',
    color: 'black',
    onPress: () => {
      console.log('eaeaea');
      navigation.toggleDrawer();
    },
  };

  const renderItem = ({item, index}) => {
    return item.toLowerCase().includes(search.toLowerCase()) ? (
      <ListItem bottomDivider onPress={true}>
        <ListItem.Content>
          <ListItem.Title
            onPress={() =>
              navigation.navigate('Product Screen', {
                name: item,
                price: Math.floor(Math.random() * 100),
              })
            }>
            {item}
          </ListItem.Title>
        </ListItem.Content>
      </ListItem>
    ) : null;
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
      <FlatList
        data={product}
        renderItem={renderItem}
        onPress={() => console.log('eaaa')}
      />
    </View>
  );
};

export default HomeScreen;
