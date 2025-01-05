import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import styles from './styles';

const FullMapView = ({navigation, route}) => {
  const {item} = route.params || {};

  const coordinates = {
    latitude: item.coordinates.lat,
    longitude: item.coordinates.lon,
    latitudeDelta: 0.09,
    longitudeDelta: 0.09,
  };

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          ...coordinates,
        }}>
        <Marker coordinate={coordinates} title={item.name} />
      </MapView>

      <View style={styles.header}>
        <Pressable onPress={onBack}>
          <Image
            style={styles.back}
            source={require('../../assets/back.png')}
          />
        </Pressable>
        <Text style={styles.title}>{`${item.name} - ${item.city}`}</Text>
      </View>
    </View>
  );
};

export default React.memo(FullMapView);
