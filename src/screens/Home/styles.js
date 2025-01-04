import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    marginTop: 32,
    marginBottom: 12,
    marginHorizontal: 32,
  },

  subtitles: {
    fontSize: 20,
    color: '#000000',
    marginTop: 40,
  },
  itemsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  emptyText: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.5)',
    textAlign: 'center',
    marginTop: 24,
  },
});

export default styles;
