import React from 'react'
import * as Animatable from "react-native-animatable";
import {Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import {LinearGradient} from "expo-linear-gradient";

import {Formik} from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    nickName: Yup.string()
        .min(4, 'NickName must be 4 characters long.')
        .max(20, 'Too Long!')
        .required('NickName is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be 8 characters long.')
        .max(50, 'Too Long!')
        .required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
});


export const SignUpForm = (props) => {
    const {onSubmit, inProgress, onError, nav} = props

    const [secureTextEntry, setSecureTextEntry] = React.useState(true);

    const errorMessage = onError
        ? onError.code === 'auth/email-already-in-use'
            ? 'User already exist'
            : 'Something went wrong. Try again'
        : null;

    return (
        <Formik
            initialValues={{email: '', password: '', nickName: '', confirmPassword: ''}}
            validationSchema={SignupSchema}
            onSubmit={values => onSubmit(values)}
        >
            {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
                <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.footer}
                >
                    <ScrollView>
                        {errorMessage ? (
                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={styles.errorMsg}>{errorMessage}</Text>
                            </Animatable.View>) : null
                        }

                        <Text style={styles.text_footer}>NickName</Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="user-o"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your NickName"
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={handleChange('nickName')}
                                onBlur={handleBlur('nickName')}
                                value={values.nickName}
                            />
                            {(values.nickName.trim().length >= 4 && !errors.nickName) ?
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
                        {errors.nickName && touched.nickName ? (
                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={styles.errorMsg}>{errors.nickName}</Text>
                            </Animatable.View>) : null
                        }


                        <Text style={[styles.text_footer, {
                            marginTop: 30
                        }]}>Email</Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="envelope-o"
                                color='#05375a'
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Email"
                                style={styles.textInput}
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
                            marginTop: 30
                        }]}>Password</Text>
                        <View style={styles.action}>
                            <Feather
                                name="lock"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Password"
                                secureTextEntry={secureTextEntry}
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
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

                        <Text style={[styles.text_footer, {
                            marginTop: 30
                        }]}>Confirm Password</Text>
                        <View style={styles.action}>
                            <Feather
                                name="lock"
                                color="#05375a"
                                size={20}
                            />
                            <TextInput
                                placeholder="Confirm Your Password"
                                secureTextEntry={secureTextEntry}
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={handleChange('confirmPassword')}
                                onBlur={handleBlur('confirmPassword')}
                                value={values.confirmPassword}
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
                        {errors.confirmPassword && touched.confirmPassword ? (
                            <Animatable.View animation="fadeInLeft" duration={500}>
                                <Text style={styles.errorMsg}>{errors.confirmPassword}</Text>
                            </Animatable.View>) : null
                        }

                        <View style={styles.textPrivate}>
                            <Text style={styles.color_textPrivate}>
                                By signing up you agree to our
                            </Text>
                            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                            <Text style={styles.color_textPrivate}>{" "}and</Text>
                            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>Privacy policy</Text>
                        </View>
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
                                    }]}>{inProgress ? "Loading..." : "Sign Up"}</Text>
                                </LinearGradient>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => nav.goBack()}
                                style={[styles.signIn, {
                                    borderColor: '#009387',
                                    borderWidth: 1,
                                    marginTop: 15
                                }]}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#009387'
                                }]}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </Animatable.View>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: /*Platform.OS === 'ios' ? 3 :*/ 5,
        backgroundColor: '#ffffff',
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
        paddingBottom: 5,
        paddingRight: 8
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
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
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
});