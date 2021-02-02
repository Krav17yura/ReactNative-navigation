import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {createStackNavigator} from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";


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
    </HomeStack.Navigator>
)

export const HomePage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});