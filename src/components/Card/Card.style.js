import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  product: {
    backgroundColor: '#f7f7f7',
    padding: 10,
    width: '90%',
    height: 300,
    borderRadius: 10,
    margin: 10,
    flex: 1,
  },
  image: {
    width: '100%',
    height: '50%',
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 20,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  inStock: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
