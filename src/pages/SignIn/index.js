import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
} from 'react-native';

import {SignInForm} from "../../components/forms/SignInForm";
import {login} from "../../redux/ducks/auth/actionCreators";

import {useDispatch, useSelector} from "react-redux";


export const SignInPage = ({navigation}) => {
    const dispatch = useDispatch();
    const {loginInProgress, loginError} = useSelector(state => state.reAuth);

    const handleSubmit = values => {
        const {email, password} = values
        dispatch(login({email, password, navigation}))
    }
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <SignInForm
                onSubmit={handleSubmit}
                inProgress={loginInProgress}
                onError={loginError}
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