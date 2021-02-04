import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import {createStackNavigator} from "@react-navigation/stack";

import {SupportPage} from "../Support";
import {SettingsPage} from "../Settings";
import {HomePage} from "./index";

const HomeStack = createStackNavigator();

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
        <HomeStack.Screen
            name="Support"
            component={SupportPage}
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
        <HomeStack.Screen
            name="Settings"
            component={SettingsPage}
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

    </HomeStack.Navigator>
)