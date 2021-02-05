import React, {useEffect} from "react";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {useDispatch} from "react-redux";

import {ProfileStackScreen} from "../Profile/screen";
import {HomeStackScreen} from "../Home/screen";
import {MapStackScreen} from "../Map/screen";
import {AddPostStackScreen} from "../AddPost/screen";

import {fetchCurrentUser} from "../../redux/ducks/currentUser/actionCreator";

const Tab = createMaterialBottomTabNavigator();

export const MainTabScreen = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCurrentUser());
    }, [dispatch]);

    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="white"
            barStyle={{backgroundColor: '#009387'}}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="home" color={color} size={26}/>
                    ),
                }}
            />
            <Tab.Screen
                name="AddPost"
                component={AddPostStackScreen}
                options={{
                    tabBarLabel: 'AddPost',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="plus-box-multiple" color={color} size={26}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Map"
                component={MapStackScreen}
                options={{
                    tabBarLabel: 'Map',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="map" color={color} size={26}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStackScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="account" color={color} size={26}/>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}








