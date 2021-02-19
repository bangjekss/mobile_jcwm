import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableNativeFeedbackComponent,
  FlatList,
} from 'react-native';
import faker from 'faker';

const App = () => {
  const [data, setData] = useState([
    {id: 1, nama: 'Bambang'},
    {id: 2, nama: 'Joko'},
    {id: 3, nama: 'Andi'},
  ]);
  return (
    <View style={styles.mainContainer}>
      <FlatList
        refreshing
        // data={data}
        data={Array.from(Array(50), () => faker.commerce.product())}
        renderItem={({item}) => (
          <View style={styles.productWrapper}>
            <Text style={styles.productText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'rgb(250, 202, 0)',
  },
  productText: {
    fontSize: 25,
  },
  productWrapper: {
    margin: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: 'white',
  },
});

export default App;
