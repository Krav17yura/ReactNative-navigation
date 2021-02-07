import React from 'react'
import {Image, StyleSheet, Text, View} from "react-native";
import {Avatar, Caption, IconButton} from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";
import {PostListItem} from "./PostListItem";


export const PostList = () => {
    return(
        <View style={styles.postList}>
            <PostListItem/>
            <PostListItem/>
            <PostListItem/>
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