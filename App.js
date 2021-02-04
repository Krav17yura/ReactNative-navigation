import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from 'react-navigation-drawer-no-warnings';
import {createStackNavigator} from '@react-navigation/stack';

import {DrawerContent} from "./src/components/DrawerContent";
import {MainTabScreen} from "./src/pages/Main";
import {SignInPage} from "./src/pages/SignIn";
import {SignUpPage} from "./src/pages/SignUp";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const singIn = false

export default function App() {
    return (
        <NavigationContainer>
            {singIn ? <>
                <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
                    <Drawer.Screen name="HomeDrawer" component={MainTabScreen}/>
                </Drawer.Navigator>
            </> : <>
                <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#009387',  elevation:0} }}>
                    <Stack.Screen name="SignIn" options={{ title: '' }} component={SignInPage}/>
                    <Stack.Screen name="SignUp" options={{ title: '' }} component={SignUpPage}/>
                </Stack.Navigator>
            </>
            }

        </NavigationContainer>
    );
}


