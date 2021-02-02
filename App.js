import React from 'react';
import {HomePage} from "./src/pages/Home";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from 'react-navigation-drawer-no-warnings';
import {ProfilePage} from "./src/pages/Profile";

import Icon from 'react-native-vector-icons/Ionicons'


const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => (
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

    </HomeStack.Navigator>
)

/*const ProfileStackScreen = ({navigation}) => (
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
                headerLeft: () => (
                    <Icon.Button
                        name='ios-menu'
                        size={25}
                        backgroundColor={'#009387'}
                        onPress={() => navigation.openDrawer()}/>

                )
            }}
        />
    </ProfileStack.Navigator>
)*/


export default function App() {

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeStackScreen}/>
                {/*<Drawer.Screen name="Profile" component={ProfileStackScreen}/>*/}
            </Drawer.Navigator>

        </NavigationContainer>
    );
}


