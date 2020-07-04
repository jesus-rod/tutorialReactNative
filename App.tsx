import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

class RestaurantType {
  id: string
  tipo: string
  image: string
  constructor(id: string, tipo: string, image: string) {
    this.id = id
    this.tipo = tipo
    this.image = image
  }
}

const dummyRestaurantTypes: Array<RestaurantType> = [
  new RestaurantType("1", "Italiano", require('./assets/italiano.jpg')),
  new RestaurantType("2", "Griego", require('./assets/griego.jpg')),
  new RestaurantType("3", "Argentino", require('./assets/argentino.jpg')),
  new RestaurantType("4", "Peruano", require('./assets/peruano.jpg'))
]

const renderResturantTypes = ({ item } : { item: RestaurantType}) => {
  return (
    <View style={styles.cards}>
        <Image style={styles.image} source={item.image}/>
        <Text style={styles.description}> {item.tipo} </Text>
      </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Restaurantes en tu area </Text>
      <FlatList style={styles.list} data={dummyRestaurantTypes} renderItem={renderResturantTypes} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: "bold",
    fontSize: 24,
    alignSelf: 'flex-start',
    marginTop: 50
  },
  list: {
    width: '100%'
  },
  cards: {
    padding: 20
  },
  description: {
    backgroundColor: '#444',
    color: 'white',
    padding: 10,
    fontWeight: "bold"
  },
  image: {
    width: '100%',
    height: 150
  }
});
