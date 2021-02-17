import React from 'react'
import { StyleSheet,  View} from 'react-native';
import {CustomMap} from "../../components/CustomMap";
import {useSelector} from "react-redux";



export const MapPage = ({navigation}) => {
    const {postList} = useSelector((state) => state.rePosts)
    return (
        <View style={styles.container}>
            <CustomMap postList={postList}/>
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