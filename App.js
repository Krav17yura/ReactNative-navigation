import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from 'react-navigation-drawer-no-warnings';

import {DrawerContent} from "./src/components/DrawerContent";
import {MainTabScreen} from "./src/pages/Main";
import {SupportPage} from "./src/pages/Support";

const Drawer = createDrawerNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator  drawerContent={props => <DrawerContent {...props}/> }>
                <Drawer.Screen name="HomeDrawer" component={MainTabScreen}/>

                {/*<Drawer.Screen name="Profile" component={ProfileStackScreen}/>*/}
            </Drawer.Navigator>

        </NavigationContainer>
    );
}


