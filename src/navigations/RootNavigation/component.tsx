import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '@screens/SingInScreen';
import FeedScreen from '@screens/FeedScreen';
import authContext from '@contexts/authContext';

const Stack = createStackNavigator();

function RootNavigation() {
  const { isSignedIn } = useContext(authContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isSignedIn ? (
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
      ) : (
        <Stack.Screen name="FeedScreen" component={FeedScreen} />
      )}
    </Stack.Navigator>
  );
}

export default RootNavigation;
