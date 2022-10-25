/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import RootNavigation from '@navigations/RootNavigation';

const styles = StyleSheet.create({
  gestureHandlerRootView: {
    flexGrow: 1,
  },
});

const App = () => {
  return (
    <GestureHandlerRootView style={styles.gestureHandlerRootView}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.lighter} />
      <NavigationContainer theme={DarkTheme}>
        <RootNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
