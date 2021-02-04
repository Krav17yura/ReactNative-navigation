import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";

import {MapPage} from "./index";

const MapStack = createStackNavigator();

export const MapStackScreen = ({navigation}) => (
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
