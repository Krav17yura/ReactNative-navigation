import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from 'react-navigation-drawer-no-warnings';

import {HomeStackScreen, MainTabScreen} from "./src/pages/Main";

const Drawer = createDrawerNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={MainTabScreen}/>
                {/*<Drawer.Screen name="Profile" component={ProfileStackScreen}/>*/}
            </Drawer.Navigator>

        </NavigationContainer>
    );
}


