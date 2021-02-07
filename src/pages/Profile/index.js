import React from 'react'
import {Text, View, StyleSheet, Button, ScrollView, Image} from "react-native";
import * as Animatable from "react-native-animatable";
import {Avatar, Caption, Paragraph, Title, IconButton, Colors} from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {PostList} from "../../components/PostList";

export const ProfilePage = ({navigation}) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Animatable.View
                    animation="fadeInLeft"
                    style={styles.footer}
                >
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://avatars.githubusercontent.com/u/36710059?s=460&u=2032a7eff0aabfcb796a018cf23c4b85a1131dd0&v=4'
                                }}
                                size={80}
                            />
                            <View style={{marginLeft: 15, flexDirection: 'column'}}>
                                <Title style={styles.title}>Krav Yura</Title>
                                <Caption style={styles.caption}>@krav</Caption>

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
                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Posts</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Likes</Caption>
                            </View>
                        </View>
                    </View>

                </Animatable.View>
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
        backgroundColor: '#1d1d1d'
    },

    postSection: {
        marginTop: 20,
        flex: 5,
    },

    userInfoSection: {
        paddingLeft: 20,
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
})


