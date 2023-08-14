import React from 'react';
import {
    Icon
  } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Octicons, FontAwesome  } from '@expo/vector-icons';
import PostsScreen from '../screens/home/PostsScreen/PostsScreen';
import CreatePostsScreen from '../screens/main/CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from '../screens/main/ProfileScreen/ProfileScreen';
import { ROUTES } from '../constants';


const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
return (
//     <Tab.Navigator
//         screenOptions={({ route }) => ({
//             headerShown: false,
//             tabBarIcon: ({ color, size, focused }) => {
//                 let iconName;

//                 if (route.name === ROUTES.HOME) {
//                     iconName = focused ? 'ios-grid' : 'ios-grid-outline'
//                 } else if (route.name === ROUTES.CREATE) {
//                     iconName = focused ? 'plus' : 'plus-outline'
//                 } else if (route.name === ROUTES.PROFILE) {
//                     iconName = focused ? 'user' : 'user-outline'
//                 }
//                 return <Icon name={iconName} size={24} color={color}/>
//                 },
            
//         })}
//     >
//         <Tab.Screen
//             name={ROUTES.POSTS}  component={PostsScreen}/>
//         <Tab.Screen
//             name={ROUTES.CREATE} component={CreatePostsScreen}
//         />
//         <Tab.Screen
//             name={ROUTES.PROFILE} component={ProfileScreen}
//         />

// </Tab.Navigator >
    
    <Tab.Navigator>
        <Tab.Screen
            options={{
                headerShown: false,
                tabBarActiveTintColor: 'teal',
                tabBarActiveBackgroundColor: '#58aaaa3c',
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, size, color }) => <Ionicons name="ios-grid" size={24} color={color} />
            }}
            name='Posts'
            component={PostsScreen}/>
        <Tab.Screen
            options={{
                headerShown: false,
                tabBarActiveTintColor: 'teal',
                tabBarActiveBackgroundColor: '#58aaaa3c',
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, size, color }) => <Octicons name="plus" size={24} color={color} />
            }}
            name='Create' component={CreatePostsScreen}
        />
        <Tab.Screen
            options={{
                headerShown: false,
                tabBarActiveTintColor: 'teal',
                tabBarActiveBackgroundColor: '#58aaaa3c',
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, size, color }) => <FontAwesome name="user" size={24} color={color} />
            }}
            name='Profile' component={ProfileScreen}
        /> 
    
    </Tab.Navigator>
)}
        


export default BottomTabNavigator;