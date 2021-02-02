import React from "react";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import {ProfileStackScreen} from "../Profile";
import {HomeStackScreen} from "../Home";
import {MapStackScreen} from "../Map";
import {AddPost, AddPostStackScreen} from "../AddPost";

const Tab = createMaterialBottomTabNavigator();

export const MainTabScreen =({navigation}) => (
    <Tab.Navigator
        initialRouteName="Feed"
        activeColor="white"
        barStyle={{ backgroundColor: '#009387' }}
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="AddPost"
            component={AddPostStackScreen}
            options={{
                tabBarLabel: 'AddPost',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="plus-box-multiple" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Map"
            component={MapStackScreen}
            options={{
                tabBarLabel: 'Map',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="map" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="account" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
)









