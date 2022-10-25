import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '@screens/SingInScreen';

const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigation;
