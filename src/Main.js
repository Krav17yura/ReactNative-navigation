import React, {useEffect} from 'react'


import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from 'react-navigation-drawer-no-warnings';
import {createStackNavigator} from '@react-navigation/stack';


import {View, ActivityIndicator, Platform} from "react-native";

import { enableScreens } from 'react-native-screens';

import {DrawerContent} from "./components/DrawerContent";
import {MainTabScreen} from "./pages/Main";
import {SignInPage} from "./pages/SignIn";
import {SignUpPage} from "./pages/SignUp";

enableScreens();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

import {useSelector} from "react-redux";
import {SplashPage} from "./pages/Splash";
import * as ImagePicker from "expo-image-picker";
import {SettingsPage} from "./pages/Settings";

export const Main = () => {
    const {isAuthenticated, isAuthenticatedLoading} = useSelector(state => state.reAuth)

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    if(isAuthenticatedLoading) {
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size="large"/>
            </View>
        );
    }




    return (
        <NavigationContainer>
            {isAuthenticated ? <>
                <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
                    <Drawer.Screen name="HomeDrawer" component={MainTabScreen}/>
                </Drawer.Navigator>


            </> : <>
                <Stack.Navigator headerMode='none'>
                    <Stack.Screen name="Splash" component={SplashPage}/>
                    <Stack.Screen name="SignIn" options={{title: ''}} component={SignInPage}/>
                    <Stack.Screen name="SignUp" options={{title: ''}} component={SignUpPage}/>
                </Stack.Navigator>
            </>}
        </NavigationContainer>
    )

}