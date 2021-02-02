import React from "react";

import Icon from "react-native-vector-icons/Ionicons";
import {createStackNavigator} from "@react-navigation/stack";

import {ProfilePage} from "../Profile";
import {HomePage} from "../Home";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {MapPage} from "../Map";
import {AddPost} from "../AddPost";

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MapStack = createStackNavigator();
const AddPostStack = createStackNavigator();
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



export const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: "white",
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen
            name="Home"
            component={HomePage}
            options={{
                headerRight: () => (
                    <Icon.Button
                        name='ios-menu'
                        size={25}
                        backgroundColor={'#009387'}
                        onPress={() => navigation.openDrawer()}/>

                )
            }}
        />

      {/*  <HomeStack.Screen
            name="Profile"
            component={ProfilePage}
            options={{
                headerRight: () => (
                    <Icon.Button
                        name='ios-menu'
                        size={25}
                        backgroundColor={'#009387'}
                        onPress={() => navigation.openDrawer()}/>

                )
            }}
        />*/}

    </HomeStack.Navigator>
)

const ProfileStackScreen = ({navigation}) => (
    <ProfileStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: "white",
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <ProfileStack.Screen
            name="Profile"
            component={ProfilePage}
            options={{
                headerRight: () => (
                    <Icon.Button
                        name='ios-menu'
                        size={25}
                        backgroundColor={'#009387'}
                        onPress={() => navigation.openDrawer()}/>

                )
            }}
        />
    </ProfileStack.Navigator>
)

const MapStackScreen = ({navigation}) => (
    <MapStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: "white",
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <MapStack.Screen
            name="Map"
            component={MapPage}
            options={{
                headerRight: () => (
                    <Icon.Button
                        name='ios-menu'
                        size={25}
                        backgroundColor={'#009387'}
                        onPress={() => navigation.openDrawer()}/>
                )
            }}
        />
    </MapStack.Navigator>
)

const AddPostStackScreen = ({navigation}) => (
    <AddPostStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: "white",
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <AddPostStack.Screen
            name="AddPost"
            component={AddPost}
            options={{
                headerRight: () => (
                    <Icon.Button
                        name='ios-menu'
                        size={25}
                        backgroundColor={'#009387'}
                        onPress={() => navigation.openDrawer()}/>
                )
            }}
        />
    </AddPostStack.Navigator>
)