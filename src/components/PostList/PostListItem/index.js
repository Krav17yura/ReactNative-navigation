import React from 'react'
import {Image, StyleSheet, Text, View} from "react-native";
import {Avatar, Caption, IconButton} from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {TouchableOpacity} from "react-native";


export const PostListItem = (props) => {
    const {currentUserId, description, docId, markedCord, postOwner, timestamp, urlPhoto, navigation} = props

    return (
        <View style={styles.postContainer}>
            <View style={styles.postHeader}>
                <View style={styles.postHeaderUserInfo}>
                    <Avatar.Image
                        style={{marginRight: 5}}
                        source={{
                            uri: postOwner.photo
                        }}
                        size={35}
                    />
                    <Caption style={styles.caption}>{postOwner.displayName}</Caption>
                    <TouchableOpacity onPress={() => navigation.navigate("FullPost")}><Text> {' ' + docId}</Text></TouchableOpacity>
                </View>
                <View style={styles.postHeaderSetting}>
                    <IconButton
                        icon={() => (
                            <FontAwesome name="ellipsis-h"
                                         color="#05375a"
                                         size={20}/>
                        )}

                        onPress={() => console.log('Pressed')}
                    />
                </View>
            </View>
            <View style={styles.postImgContainer}>
                <Image
                    style={styles.postImg}
                    source={{
                        uri: urlPhoto
                    }}
                />
            </View>
            <View style={styles.postFooter}>
                <View style={styles.buttonsContainer}>
                    <IconButton
                        style={{marginBottom: 0}}
                        icon={() => (
                            <FontAwesome name="heart-o"
                                         color="#05375a"
                                         size={20}/>
                        )}

                        onPress={() => console.log('Pressed')}
                    />
                    <IconButton
                        style={{marginBottom: 0}}
                        icon={() => (
                            <FontAwesome name="comment-o"
                                         color="#05375a"
                                         size={20}/>
                        )}

                        onPress={() => console.log('Pressed')}
                    />
                </View>
                <View style={styles.postLikes}>
                    <Caption style={styles.caption}>10 likes</Caption>
                </View>
                <View style={styles.postDescription}>
                    <Text>
                        <Caption style={styles.caption}>{postOwner.displayName + " "}</Caption>
                        {description}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    postContainer: {
        flex: 1,
        width: '90%',
        borderRadius: 8,
        backgroundColor: '#292929',
        marginBottom: 20
    },
    postHeader: {
        paddingLeft: 10,
        flex: 1,
        flexDirection: "row",

    },
    postHeaderUserInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    postHeaderSetting: {
        justifyContent: 'center'
    },
    postImgContainer: {
        height: 400
    },
    postImg: {
        width: '100%',
        height: '100%',
    },
    postFooter: {
        backgroundColor: '#292929',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    postLikes: {
        paddingLeft: 10
    },
    postDescription: {
        padding: 10,
    },
    caption: {
        fontSize: 15,
        lineHeight: 15,
    },
})