import React from 'react'
import {Text, View, StyleSheet, Button} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {createStackNavigator} from "@react-navigation/stack";

const ProfileStack = createStackNavigator();

export const ProfileStackScreen = ({navigation}) => (
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
                headerRight: () => (
                    <Icon.Button
                        name='ios-menu'
                        size={25}
                        backgroundColor={'#009387'}
                        onPress={() => navigation.openDrawer()}/>
                )
            }}
        />
    </ProfileStack.Navigator>
)

export const ProfilePage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>
                Profile Page
            </Text>
            <Button
                title="Go to details page again"
                onPress={() => navigation.push('Profile')}
            />
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})


