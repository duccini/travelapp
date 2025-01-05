import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: '100%',
    height: '100%',
  },

  header: {
    position: 'absolute',
    top: 40,
    backgroundColor: 'white',
    borderRadius: 15,
    width: width - 48,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 24,
    paddingHorizontal: 12,
  },

  title: {
    fontSize: 18,
    color: '#000',
  },

  back: {
    width: 50,
    height: 50,
  },
});

export default styles;
