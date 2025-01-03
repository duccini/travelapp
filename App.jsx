import React from 'react';

import {StyleSheet} from 'react-native';
import Home from './src/screens/Home';

/**
 * SafeAreaView start the View from the Safe part - iOS +10 & other devices
 *
 * StyleSheet gives identifier to each key in styles and render the same
 * style, also check for errors
 */

function App() {
  return <Home />;
}

const styles = StyleSheet.create({});

export default App;
