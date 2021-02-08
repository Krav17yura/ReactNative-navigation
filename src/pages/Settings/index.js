import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, TextInput, ScrollView, Platform} from 'react-native';
import {Avatar} from "react-native-paper";
import * as Animatable from "react-native-animatable";
import {Formik} from "formik";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import * as Yup from "yup";
import {LinearGradient} from "expo-linear-gradient";


import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import * as ImagePicker from 'expo-image-picker';

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

    const [image, setImage] = useState('https://api.adorable.io/avatars/80/abott@adorable.png');


    const takePhotoFromCamera = () => {
        // ImagePicker.openCamera({
        //     compressImageMaxWidth: 300,
        //     compressImageMaxHeight: 300,
        //     cropping: true,
        //     compressImageQuality: 0.7
        // }).then(image => {
        //     console.log(image);
        //     setImage(image.path);
        //     bs.current.snapTo(1);
        // });
        console.log("Camera")
    }

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const choosePhotoFromLibrary = () => {
        ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [5, 5],
            quality: 1,
        }).then(img => {
            console.log(img);
            bs.current.snapTo(1);
            (!img.cancelled) ? setImage(img.uri) : null
        }).catch(e => console.log(e))
    }

    const renderInner = () => (
        <View style={styles.panel}>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.panelTitle}>Upload Photo</Text>
                <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
            </View>
            <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
                <Text style={styles.panelButtonTitle}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
                <Text style={styles.panelButtonTitle}>Choose From Library</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.panelButton}
                onPress={() => bs.current.snapTo(1)}>
                <Text style={styles.panelButtonTitle}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );

    const renderHeader = () => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandle}/>
            </View>
        </View>
    );

    const bs = React.createRef();
    const fall = new Animated.Value(1);

    return (
        <View style={styles.container}>
            <BottomSheet
                ref={bs}
                snapPoints={[330, 0]}
                renderContent={renderInner}
                renderHeader={renderHeader}
                initialSnap={1}
                callbackNode={fall}
                enabledGestureInteraction={true}
                enabledContentTapInteraction={false}
            />
            <Animated.View style={{
                margin: 20,
                opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
            }}>
                {/*<Animatable.View*/}
                {/*    animation="fadeInUpBig"*/}
                {/*>*/}
                <View style={styles.settingsHeader}>
                    <Avatar.Image
                        source={{
                            uri: 'https://avatars.githubusercontent.com/u/36710059?s=460&u=2032a7eff0aabfcb796a018cf23c4b85a1131dd0&v=4'
                        }}
                        size={70}
                    />
                    <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
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
            </Animated.View>
            {/*</Animatable.View>*/}
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


    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
    },
    header: {
        backgroundColor: '#009387',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#009387',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
});