import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

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