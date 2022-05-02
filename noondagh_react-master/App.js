import React from 'react';
import {View} from 'react-native';
import {publicStyles} from './src/styles/publicStyles';
import AppNavigator from './AppNavigator';
import {enableScreens} from 'react-native-screens';
enableScreens();
export default function App() {
  return (
    <View style={{...publicStyles.container}}>
      <AppNavigator />
    </View>
  );
}
