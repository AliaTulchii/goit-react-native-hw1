import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screens/LoginScreen/LoginScreen'
import RegistrationScreen from './src/screens/RegistrationScreen/RegistrationScreen';
import CreatePostsScreen from './src/screens/CreatePostsScreen/CreatePostsScreen'
import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import PostsScreen from './src/screens/PostsScreen/PostsScreen';
import { Ionicons, Octicons, FontAwesome  } from '@expo/vector-icons';


const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
    if (!isAuth) {
    return <AuthStack.Navigator>
    <AuthStack.Screen
      options={{
        headerShown: false,
      }}
      name='Login'
      component={LoginScreen}
    />
    <AuthStack.Screen
      options={{
        headerShown: false,
      }}
      name='Registration'
      component={RegistrationScreen}
    />
    <AuthStack.Screen
      options={{
        headerShown: false,
      }}
      name='Posts'
      component={PostsScreen}
    />
    
    </AuthStack.Navigator>
    }
    return <MainTab.Navigator tabBarOptions={{ showLabel: false}}>
        <MainTab.Screen
            options={{ headerShown: false, tabBarIcon: ({focused,size,color})=><Ionicons name="ios-grid" size={24} color='teal' /> }}
            name='Posts'
            component={PostsScreen}
        />
        <MainTab.Screen
            options={{ headerShown: false, tabBarIcon: ({focused,size,color})=><Octicons name="plus" size={24} color='teal' /> }}
            name='Create' component={CreatePostsScreen}
        />
        <MainTab.Screen
            options={{ headerShown: false, tabBarIcon: ({focused,size,color})=><FontAwesome name="user" size={24} color='teal' />}}
            name='Profile' component={ProfileScreen}
        />
  </MainTab.Navigator>
  }