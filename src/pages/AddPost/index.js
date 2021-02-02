import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {createStackNavigator} from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";


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
            component={AddPost}
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

export const AddPost = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Add Post</Text>
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