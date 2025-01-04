import {StyleSheet, Dimensions} from 'react-native';

/**
 * screen OR window, screen might have additional spaces
 */
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,

    padding: 8,

    borderWidth: 1,
    borderColor: '#E2E2E2',
    borderRadius: 16,
  },
  image: {
    borderRadius: 16,
    width: (width - 114) / 2,
    height: 120,
  },
  title: {
    fonSize: 14,
    fontWeight: 700,
    marginTop: 12,
  },
  subtitle: {
    fonSize: 12,
    fontWeight: 400,
    color: 'rgba(0,0,0,0.5)',
  },
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 12,
    height: 12,
    marginRight: 8,
  },
});

export default styles;
