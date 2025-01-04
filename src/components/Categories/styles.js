import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
    fontSize: 14,
    color: 'rgba(0,0,0, 0.5)',
    paddingVertical: 2,
  },
  activeItem: {
    color: '#000000',
  },
  itemContainer: {
    marginRight: 17,

    marginBottom: 14,
  },
  itemContainerSelected: {
    borderBottomWidth: 2,
    borderBottomColor: '#4681A3',
  },
});

export default styles;
