/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

import MapView, {Marker} from 'react-native-maps';

import styles from './styles';

import Title from '../../components/Title';
import InfoCard from '../../components/InfoCard';

const AttractionDetails = ({navigation, route}) => {
  const {item} = route.params || {};

  const mainImage = item.images.length ? item.images[0] : null;

  const slicedImages = item.images.length ? item.images.slice(0, 5) : [];

  const diffImages = item.images.length - slicedImages.length;

  // console.log(item.coordinates.lat, item.coordinates.lon);

  const coordinates = {
    latitude: item.coordinates.lat,
    longitude: item.coordinates.lon,
    latitudeDelta: 0.09,
    longitudeDelta: 0.09,
  };

  /**
   *  borderRadius don't affect ImageBackground because it has a View and a
   *  Image inside
   */

  /**
   *  `` organize the text as you define
   */

  const onGalleryNavigate = () => {
    navigation.navigate('Gallery', {images: item.images});
  };

  const onFullMapView = () => {
    navigation.navigate('FullMapView', {item});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={styles.mainImage}
          imageStyle={{borderRadius: 20}}
          source={{uri: mainImage}}>
          <View style={styles.header}>
            <Pressable onPress={() => navigation.goBack()} hitSlop={8}>
              <Image
                style={styles.icon}
                source={require('../../assets/back.png')}
              />
            </Pressable>
            <Pressable hitSlop={8}>
              <Image
                style={styles.icon}
                source={require('../../assets/share.png')}
              />
            </Pressable>
          </View>

          <Pressable onPress={onGalleryNavigate} style={styles.footer}>
            {slicedImages.map((image, index) => (
              <View key={image}>
                <Image style={styles.miniImage} source={{uri: image}} />
                {diffImages > 0 && index === slicedImages.length - 1 ? (
                  <View style={styles.moreImagesContainer}>
                    <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                  </View>
                ) : null}
              </View>
            ))}
          </Pressable>
        </ImageBackground>

        <View style={styles.headerContainer}>
          <View style={{maxWidth: '70%'}}>
            <Title text={item.name} style={styles.title} />
            <Text style={styles.city}>{item.city}</Text>
          </View>
          <Title style={styles.price} text={item?.entry_price} />
        </View>

        <InfoCard
          icon={require('../../assets/location_circle.png')}
          text={item.address}
        />

        <InfoCard
          icon={require('../../assets/schedule.png')}
          text={`OPEN 
${item.opening_time} - ${item.closing_time}`}
        />

        <View style={{borderRadius: 10, overflow: 'hidden'}}>
          <MapView
            style={styles.map}
            initialRegion={{
              ...coordinates,
            }}>
            <Marker coordinate={coordinates} title={item.name} />
          </MapView>
        </View>

        <Text onPress={() => onFullMapView()} style={styles.mapText}>
          Show full screen map
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(AttractionDetails);
