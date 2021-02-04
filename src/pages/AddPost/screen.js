import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import {AddPostPage} from "./index";
import {createStackNavigator} from "@react-navigation/stack";

const AddPostStack = createStackNavigator();


export const AddPostStackScreen = ({navigation}) => (
    <AddPostStack.Navigator screenOptions={{
        headerStyle: {backgroundColor: '#009387'},
        headerTintColor: "white",
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <AddPostStack.Screen
            name="AddPost"
            component={AddPostPage}
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