import React from 'react'
import * as Animatable from "react-native-animatable";
import {Platform, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import {LinearGradient} from "expo-linear-gradient";
import {useTheme} from "react-native-paper";

import {Formik} from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, 'Password must be 8 characters long.')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});

const printErrorMessage = error => {
    switch (error.code) {
        case 'auth/wrong-password':
            return 'Wrong credentials';
        case 'auth/users-not-found':
            return 'User does not exist';
        case 'auth/too-many-requests':
            return 'User blocked. Restore password or try again later';
        case 'auth/user-not-found':
            return 'User does not exist';
        default:
            return 'Something went wrong. Try again';
    }
};

export const SignInForm = (props) => {
    const {onSubmit, inProgress, onError, nav} = props

    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const errorMessage = onError ? printErrorMessage(onError) : null;

    const {colors} = useTheme();

    return (
        <Formik
            initialValues={{email: '', password: ''}}
            validationSchema={SignupSchema}
            onSubmit={values => onSubmit(values)}
        >
            {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
                <Animatable.View
                    animation="fadeInUpBig"
                    style={[styles.footer, {
                        backgroundColor: colors.background
                    }]}
                >
                    {errorMessage ? (
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>{errorMessage}</Text>
                        </Animatable.View>) : null
                    }

                    <Text style={[styles.text_footer, {
                        color: colors.text
                    }]}>Email</Text>
                    <View style={styles.action}>
                        <FontAwesome
                            name="envelope-o"
                            color={colors.text}
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Username"
                            placeholderTextColor="#666666"
                            style={[styles.textInput, {
                                color: colors.text
                            }]}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            autoCapitalize="none"
                        />
                        {(values.email.trim().length >= 5 && !errors.email) ?
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                            : null}
                    </View>
                    {errors.email && touched.email ? (
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>{errors.email}</Text>
                        </Animatable.View>) : null
                    }


                    <Text style={[styles.text_footer, {
                        color: colors.text,
                        marginTop: 35
                    }]}>Password</Text>
                    <View style={styles.action}>
                        <Feather
                            name="lock"
                            color={colors.text}
                            size={20}
                        />
                        <TextInput
                            placeholder="Your Password"
                            placeholderTextColor="#666666"
                            secureTextEntry={secureTextEntry}
                            style={[styles.textInput, {
                                color: colors.text
                            }]}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            autoCapitalize="none"
                        />
                        <TouchableOpacity
                            onPress={() => setSecureTextEntry(!secureTextEntry)}
                        >
                            {secureTextEntry ?
                                <Feather
                                    name="eye-off"
                                    color="grey"
                                    size={20}
                                />
                                :
                                <Feather
                                    name="eye"
                                    color="grey"
                                    size={20}
                                />
                            }
                        </TouchableOpacity>
                    </View>
                    {errors.password && touched.password ? (
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>{errors.password}</Text>
                        </Animatable.View>) : null
                    }

                    <TouchableOpacity>
                        <Text style={{color: '#009387', marginTop: 15}}>Forgot password?</Text>
                    </TouchableOpacity>
                    <View style={styles.button}>

                        <TouchableOpacity
                            style={styles.signIn}
                            onPress={handleSubmit}
                        >
                            <LinearGradient
                                colors={['#08d4c4', '#01ab9d']}
                                style={styles.signIn}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#fff'
                                }]}>{inProgress ? "Loading..." : "Sign In"}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => nav.navigate('SignUp')}
                            style={[styles.signIn, {
                                borderColor: '#009387',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: '#009387'
                            }]}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});