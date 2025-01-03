import React from 'react';
import {Text} from 'react-native';

import styles from './styles';

/**
 * Title.defaultProps = { text: 'Default Props' }
 */

const Title = ({text = 'Default Text'}) => {
  return <Text style={styles.title}>{text}</Text>;
};

export default Title;
