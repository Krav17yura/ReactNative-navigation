import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

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