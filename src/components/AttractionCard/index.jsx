import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';

const AttractionCard = ({imageSrc, title, subtitle, style, handleOnPress}) => {
  return (
    <Pressable onPress={handleOnPress} style={[styles.card, style]}>
      <Image style={styles.image} source={{uri: imageSrc}} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.subtitleContainer}>
        <Image
          style={styles.icon}
          source={require('../../assets/location.png')}
        />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </Pressable>
  );
};

export default React.memo(AttractionCard);
