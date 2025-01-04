import React from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import AttractionDetails from './src/screens/AttractionDetails';
import Gallery from './src/screens/Gallery';

/**
 * SafeAreaView start the View from the Safe part - iOS +10 & other devices
 *
 * StyleSheet gives identifier to each key in styles and render the same
 * style, also check for errors
 */

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={AttractionDetails} name="AttractionDetails" />
        <Stack.Screen component={Gallery} name="Gallery" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
