import RestaurantType from './models/RestaurantType'

const dummyRestaurantTypes: Array<RestaurantType> = [
  new RestaurantType("1", "Italiano", require('./assets/italiano.jpg')),
  new RestaurantType("2", "Griego", require('./assets/griego.jpg')),
  new RestaurantType("3", "Argentino", require('./assets/argentino.jpg')),
  new RestaurantType("4", "Peruano", require('./assets/peruano.jpg'))
]

export default dummyRestaurantTypes