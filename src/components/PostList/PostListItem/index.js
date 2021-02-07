import React from 'react'
import {Image, StyleSheet, Text, View} from "react-native";
import {Avatar, Caption, IconButton} from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";


export const PostListItem = () => {
    return(
        <View style={styles.postContainer}>
            <View style={styles.postHeader}>
                <View style={styles.postHeaderUserInfo}>
                    <Avatar.Image
                        style={{marginRight: 5}}
                        source={{
                            uri: 'https://avatars.githubusercontent.com/u/36710059?s=460&u=2032a7eff0aabfcb796a018cf23c4b85a1131dd0&v=4'
                        }}
                        size={35}
                    />
                    <Caption style={styles.caption}>krav_yura</Caption>
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
                        uri: 'https://avatars.githubusercontent.com/u/36710059?s=460&u=2032a7eff0aabfcb796a018cf23c4b85a1131dd0&v=4'
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
                        <Caption style={styles.caption}>krav_yura  </Caption>
                        Bacon ipsum dolor amet prosciutto
                        andouille pork chop, tenderloin short
                        loin t-bone leberkas rump kevin

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
    postLikes:{
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