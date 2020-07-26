import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import RestaurantType from './models/RestaurantType'
import dummyRestaurantTypes from './dummyData'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


const renderResturantTypes = ({ item } : { item: RestaurantType}) => {
  return (
    <View style={styles.cards}>
        <Image style={styles.image} source={item.image}/>
        <Text style={styles.description}> {item.tipo} </Text>
      </View>
  )
}

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Perfil </Text>
    </View>
  )
}

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Restaurantes en tu area </Text>
      <FlatList style={styles.list} data={dummyRestaurantTypes} renderItem={renderResturantTypes} />
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({ focused, size, color}) => {
          switch (route.name) {
            case "Home":
              return <Ionicons name="ios-home" size={size} color={color} />
            case "Perfil":
              let iconName = focused ? "ios-person" : "ios-airplane"
              return <Ionicons name={iconName} size={size} color={color} />
              return <Ionicons name={iconName} size={size} color={color} />
          }
        }
      })}
      tabBarOptions={{
        inactiveTintColor: 'lightgray',
        activeTintColor: 'rebeccapurple'
      }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
