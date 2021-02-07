import React from 'react'
import {View, Text, StyleSheet, Button, TextInput, Platform} from 'react-native'
import {Formik} from "formik";
import * as Yup from "yup";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";

const SettingSchema = Yup.object().shape({
    description: Yup.string()
        .min(4, 'Description must be 4 characters long.')
        .max(30, 'Too Long!'),
});

export const AddPostPage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.addPostForm}>
                <Formik
                    initialValues={{description: ''}}
                    onSubmit={() => console.log('submit')}
                    validationSchema={SettingSchema}
                >
                    {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
                        <View>
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
                        </View>
                    )}
                </Formik>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1d1d1d',
    },
    addPostForm: {
        padding: 20
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