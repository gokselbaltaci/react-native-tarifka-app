import {Dimensions, StyleSheet} from 'react-native';
const deviceSize = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner_container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 2,
    resizeMode: 'cover',
  },
  text: {
    fontSize: 24,
    color: '#a42b2a',
    fontWeight: '900',
  },
  country: {
    borderBottomColor: '#a42b2a',
    borderBottomWidth: 1,
    fontSize: 18,
    color: '#a42b2a',
    fontWeight: '700',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'justify',
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
  },
  button_text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
