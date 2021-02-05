import React from 'react'


import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from 'react-navigation-drawer-no-warnings';
import {createStackNavigator} from '@react-navigation/stack';


import {DrawerContent} from "./components/DrawerContent";
import {MainTabScreen} from "./pages/Main";
import {SignInPage} from "./pages/SignIn";
import {SignUpPage} from "./pages/SignUp";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

import {projectAuth} from "./firebase-config";
import {authInfoSuccess} from "./redux/ducks/auth/actionCreators";
import {useSelector} from "react-redux";

export const Main = () => {
    const {isAuthenticated} = useSelector(state => state.reAuth)


    return (
        <NavigationContainer>
            {isAuthenticated ? <>
                <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
                    <Drawer.Screen name="HomeDrawer" component={MainTabScreen}/>
                </Drawer.Navigator>
            </> : <>
                <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#009387', elevation: 0}}}>
                    <Stack.Screen name="SignIn" options={{title: ''}} component={SignInPage}/>
                    <Stack.Screen name="SignUp" options={{title: ''}} component={SignUpPage}/>
                </Stack.Navigator>
            </>}
        </NavigationContainer>
    )

}