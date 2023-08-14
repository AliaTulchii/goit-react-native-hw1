import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/auth/LoginScreen/LoginScreen';
import RegistrationScreen from '../screens/auth/RegistrationScreen/RegistrationScreen';
import BottomTabNavigator from './BottomTabNavigator';
import PostsScreen from '../screens/home/PostsScreen/PostsScreen';
import { ROUTES } from '../constants';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName={ROUTES.LOGIN}>
          <Stack.Screen
              name="ROUTES.LOGIN"
              component={LoginScreen}
              options={{headerShown: false}}
          />
          <Stack.Screen
              name="ROUTES.REGISTRATION"
              component={RegistrationScreen}
              options={{headerShown: false}}
          />
          <Stack.Screen
              name="ROUTES.HOME"
              component={BottomTabNavigator}
              options={{headerShown: false}}
          />
    </Stack.Navigator>
  );
}

export default AuthNavigator;