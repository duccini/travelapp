import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    padding: 32,
  },

  mainImage: {
    width: '100%',
    height: height / 2,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  icon: {
    width: 36,
    height: 36,
    margin: 16,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'rgba(256, 256, 256, 0.5)',
    margin: 16,
    paddingHorizontal: 8,
  },

  miniImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginHorizontal: 4,
    marginVertical: 8,
  },
  moreImagesContainer: {
    width: 50,
    height: 50,
    borderRadius: 8,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.38)',

    marginHorizontal: 4,
    marginVertical: 8,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreImages: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },

  headerContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 32,
  },

  title: {
    color: '#000',
  },

  price: {
    color: '#000',
  },

  city: {
    fontSize: 20,
    color: '#000',
    fontWeight: '400',
    marginTop: 4,
  },

  map: {
    width: '100%',
    height: 200,

    paddingBottom: 20,
  },

  mapText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#4681A3',
    textAlign: 'center',
    paddingTop: 16,
    marginBottom: 40,
  },
});

export default styles;
