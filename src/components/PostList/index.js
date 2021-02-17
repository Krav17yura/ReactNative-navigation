import React from 'react'
import {Image, StyleSheet, Text, View} from "react-native";
import {Avatar, Caption, IconButton} from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";
import {PostListItem} from "./PostListItem";


export const PostList = (props) => {
    const {posts, navigation} = props

    return (
        <View style={styles.postList}>
            {posts && posts.map(el => (
                <PostListItem
                    key={el.docId}
                    {...el}
                    navigation={navigation}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    postList: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})