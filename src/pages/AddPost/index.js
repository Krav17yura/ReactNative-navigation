import React, { useState} from 'react'
import {View, Text, StyleSheet, Image, ScrollView, TextInput, Platform, TouchableOpacity} from 'react-native'
import {Formik} from "formik";
import * as Yup from "yup";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";
import Animated from "react-native-reanimated";
import {BottomSheetAddImage} from "../../components/BottomSheetAddImage";
import {LinearGradient} from "expo-linear-gradient";

const SettingSchema = Yup.object().shape({
    description: Yup.string()
        .min(4, 'Description must be 4 characters long.')
        .max(30, 'Too Long!'),
});

export const AddPostPage = ({navigation}) => {
    const [image, setImage] = useState('');

    const bs = React.createRef();
    const fall = new Animated.Value(1);

    const handleChangeImage = (value) => {
        setImage(value)
    }

    return (
            <View style={styles.container}>
                <BottomSheetAddImage
                    bs={bs}
                    fall={fall}
                    handleChangeImage={handleChangeImage}
                />
                <ScrollView>
                <Animated.View style={{
                    opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
                }}>
                    <View style={styles.addPostForm}>
                        <Formik
                            initialValues={{description: ''}}
                            onSubmit={() => console.log('submit')}
                            validationSchema={SettingSchema}
                        >
                            {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
                                <View>
                                    <Text style={styles.text_footer}>Photo</Text>

                                    <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                                        <Text style={{
                                            color: '#009387',
                                            fontSize: 18
                                        }}>{image ? 'Replace photo' : 'Upload photo'}</Text>
                                    </TouchableOpacity>

                                    {image ?
                                        <Image source={{
                                            uri: image
                                        }}
                                               resizeMode="cover"
                                               style={{width: '100%', height: 400,}}
                                        /> : null}


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
                </Animated.View>
                </ScrollView>
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