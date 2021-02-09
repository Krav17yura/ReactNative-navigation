import React from 'react'
import { StyleSheet,  View} from 'react-native';
import {CustomMap} from "../../components/CustomMap";



export const MapPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <CustomMap/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#fff',
    },
});