import React, {useEffect} from 'react'
import {View, StyleSheet} from 'react-native'
import {PostList} from "../../components/PostList";
import * as Animatable from "react-native-animatable";
import {ScrollView} from "react-native";
import {useDispatch, useSelector} from "react-redux";

import {getUserList} from "../../redux/ducks/users/actionCreator";
import {getPosts} from "../../redux/ducks/posts/actionCreators";

export const HomePage = ({navigation}) => {
    const {currentUser, userList} = useSelector((state) => state.reUsers)
    const {postList} = useSelector((state) => state.rePosts)
    const dispatch = useDispatch()



    useEffect(() => {
        dispatch(getUserList())
        dispatch(getPosts())
    }, [])

    return (
        <ScrollView>
            <View style={styles.container}>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.postSection}
                >
                    <PostList posts={postList} navigation={navigation}/>
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