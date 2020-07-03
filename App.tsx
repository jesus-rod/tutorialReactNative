import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
} from "react-native";



enum RestaurantType {
  italianos,
  argentino,
  peruanos,
  chileno,
  venezolano,
  colombiano,
}

class Restaurantes {
  id: string
  tipo: RestaurantType
  image: string

  constructor(
    id: string,
    tipo: RestaurantType,
    image: string,
  ) {
    this.id = id;
    this.tipo = tipo;
    this.image = image;
  }
  
}

const RESTAURANT_TYPES: Array<Restaurantes> = [
  new Restaurantes("0", RestaurantType.argentino, require('./assets/argentino.jpg')),
  new Restaurantes("1", RestaurantType.italianos, require('./assets/italiano.jpg')),
  new Restaurantes("2", RestaurantType.peruanos, require('./assets/peruano.jpg')),
];

const renderItem = ({ item }: { item: Restaurantes }) => {
  return (
    <View style={styles.tarjeta}>
      <Image style={styles.image} source={item.image} />
      <Text style={styles.description}>
        {`${RestaurantType[item.tipo]}`}
      </Text> 
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Restaurantes en tu area</Text>
          <FlatList
            style={styles.list}
            data={RESTAURANT_TYPES}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    alignSelf: "flex-start",
    fontSize: 24,
  },
  description: { 
    fontSize: 16,
    textTransform: "capitalize",
    color: 'white',
    backgroundColor: '#444',
    padding: 10
   },
  list: {
    marginTop: 20,
    width: "100%",
  },
  tarjeta: {
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    borderColor: "black",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 24,
  },
  image: {
    width: '100%'
  }
});
