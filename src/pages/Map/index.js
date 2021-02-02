import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {createStackNavigator} from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";

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

export const MapPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Map Page</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
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