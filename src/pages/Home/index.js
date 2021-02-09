import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {PostList} from "../../components/PostList";
import * as Animatable from "react-native-animatable";
import {ScrollView} from "react-native";

export const HomePage = ({navigation}) => {


    return (
        <ScrollView>
        <View style={styles.container}>
            <Animatable.View
                animation="fadeInUpBig"
                style={styles.postSection}
            >
                <PostList/>
            </Animatable.View>
        </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',

    },
    postSection: {
        marginTop: 20,
    },
});