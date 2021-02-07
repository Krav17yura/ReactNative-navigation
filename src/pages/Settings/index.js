import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, TextInput, ScrollView, Platform} from 'react-native';
import {Avatar} from "react-native-paper";
import * as Animatable from "react-native-animatable";
import {Formik} from "formik";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as Yup from "yup";
import {LinearGradient} from "expo-linear-gradient";

const SettingSchema = Yup.object().shape({
    nickName: Yup.string()
        .min(4, 'NickName must be 4 characters long.')
        .max(20, 'Too Long!')
        .required('NickName is required'),
    userName: Yup.string()
        .min(6, 'User name must be 4 characters long.')
        .max(25, 'Too Long!'),
    description: Yup.string()
        .min(4, 'Description must be 4 characters long.')
        .max(30, 'Too Long!'),
});

export const SettingsPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Animatable.View
                animation="fadeInUpBig"
            >
            <View style={styles.settingsHeader}>
                <Avatar.Image
                    source={{
                        uri: 'https://avatars.githubusercontent.com/u/36710059?s=460&u=2032a7eff0aabfcb796a018cf23c4b85a1131dd0&v=4'
                    }}
                    size={70}
                />
                <TouchableOpacity onPress={() => console.log("change img")}>
                    <Text style={{color: '#009387', marginTop: 10, fontSize: 18}}>Change profile img</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.settingMainContainer}>
                <Formik
                    initialValues={{nickName: '', userName: '', description: ''}}
                    validationSchema={SettingSchema}
                    onSubmit={values => console.log(values)}>
                    {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
                        <View>
                            <Text style={styles.text_footer}>Nick Name</Text>
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


                            <Text style={styles.text_footer}>User Name</Text>
                            <View style={styles.action}>
                                <FontAwesome
                                    name="user-o"
                                    color="#05375a"
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Your full name"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onChangeText={handleChange('userName')}
                                    onBlur={handleBlur('userName')}
                                    value={values.userName}
                                />
                                {(values.userName.trim().length >= 6 && !errors.userName) ?
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
                            {errors.userName && touched.userName ? (
                                <Animatable.View animation="fadeInLeft" duration={500}>
                                    <Text style={styles.errorMsg}>{errors.userName}</Text>
                                </Animatable.View>) : null
                            }

                            <Text style={styles.text_footer}>Description</Text>
                            <View style={styles.action}>
                                <FontAwesome
                                    name="user-o"
                                    color="#05375a"
                                    size={20}
                                />
                                <TextInput
                                    placeholder="Description"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    onChangeText={handleChange('description')}
                                    onBlur={handleBlur('description')}
                                    value={values.description}
                                />
                                {(values.description.trim().length >= 6 && !errors.description) ?
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
                            {errors.description && touched.description ? (
                                <Animatable.View animation="fadeInLeft" duration={500}>
                                    <Text style={styles.errorMsg}>{errors.description}</Text>
                                </Animatable.View>) : null
                            }

                            <View style={styles.button}>
                                <TouchableOpacity
                                    style={styles.signIn}
                                    onPress={() => console.log('submit')}
                                >
                                    <LinearGradient
                                        colors={['#08d4c4', '#01ab9d']}
                                        style={styles.signIn}
                                    >
                                        <Text style={[styles.textSign, {
                                            color: '#fff'
                                        }]}>Submit</Text>
                                    </LinearGradient>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => navigation.goBack()}
                                    style={[styles.signIn, {
                                        borderColor: '#009387',
                                        borderWidth: 1,
                                        marginTop: 15
                                    }]}
                                >
                                    <Text style={[styles.textSign, {
                                        color: '#009387'
                                    }]}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </Formik>
            </View>
            </Animatable.View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1d1d1d',
    },
    settingsHeader: {
        padding: 20,
        alignItems: 'center'
    },
    settingMainContainer: {
        padding: 20,
        paddingTop: 0
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        marginTop: 10
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
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    },
});