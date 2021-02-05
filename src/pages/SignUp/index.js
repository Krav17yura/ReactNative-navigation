import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    StatusBar
} from 'react-native';
import {useDispatch, useSelector} from "react-redux";

import {SignUpForm} from "../../components/forms/SignUpForm";

import {signup} from "../../redux/ducks/auth/actionCreators";

export const SignUpPage = ({navigation}) => {
    const dispatch = useDispatch();
    const {signupInProgress, signupError} = useSelector(state => state.reAuth);


    const handleSubmit = values => {
        const {email, password, nickName} = values
        dispatch(signup({email, password,nickName, navigation}))
    }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>
            <SignUpForm
                onSubmit={handleSubmit}
                inProgress={signupInProgress}
                onError={signupError}
                nav={navigation}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },

    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
});