import React from 'react'
import {Text, View, StyleSheet, Button} from "react-native";



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
            <Button
                title="Go to the first screen"
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#bc9f9f',
        alignItems: 'center',
        justifyContent: 'center',
    }
})