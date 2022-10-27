import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '@screens/SingInScreen';
import FeedScreen from '@screens/FeedScreen';

const Stack = createStackNavigator();

function RootNavigation() {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  // TODO: use redux
  const navigateToFeedStack = () => setIsSignedIn(true);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isSignedIn ? (
        <Stack.Screen name="SignInScreen" component={SignInScreen} initialParams={{ navigateToFeedStack }} />
      ) : (
        <Stack.Screen name="FeedScreen" component={FeedScreen} />
      )}
    </Stack.Navigator>
  );
}

export default RootNavigation;
