import React from 'react'
import { View, StyleSheet, ScrollView} from "react-native";
import * as Animatable from "react-native-animatable";
import {Avatar, Caption, Title, IconButton, } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {PostList} from "../../components/PostList";
import {useSelector} from "react-redux";

export const ProfilePage = ({navigation}) => {
    const {currentUser} = useSelector((state) => state.reUsers)
    const {postList} = useSelector((state) => state.rePosts)
    return (
        <ScrollView>
            <View style={styles.container}>
                <Animatable.View
                    animation="fadeInLeft"
                    style={styles.footer}
                >
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15, paddingLeft: 20, marginBottom: 15}}>
                            <Avatar.Image
                                source={{
                                    uri: currentUser.photo
                                }}
                                size={80}
                            />
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Title style={styles.title}>Krav Yura</Title>
                                <Caption style={styles.caption}>@{currentUser.displayName}</Caption>

                            </View>

                            <IconButton
                                style={{margin: 0}}
                                icon={() => (
                                    <FontAwesome name="cog"
                                                 color="#05375a"
                                                 size={20}/>
                                )}

                                onPress={() => navigation.navigate('Settings')}
                            />

                        </View>
                        <View style={styles.infoBoxWrapper}>
                            <View style={[styles.infoBox, {
                                borderRightColor: '#dddddd',
                                borderRightWidth: 1
                            }]}>
                                <Title>80</Title>
                                <Caption>Posts</Caption>
                            </View>
                            <View style={styles.infoBox}>
                                <Title>100</Title>
                                <Caption>Likes</Caption>
                            </View>
                        </View>
                    </View>

                      {/*  <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Posts</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Likes</Caption>
                            </View>
                        </View>
                    </View>*/}

                </Animatable.View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.postSection}
                >
                    <PostList posts={postList}/>
                </Animatable.View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1d1d1d',
    },

    postSection: {
        marginTop: 20,
        flex: 5,
    },



    title: {
        fontSize: 20,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 15,
        lineHeight: 15,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
},
    infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
},
})


