import React, {useEffect, useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TextInput,
    Platform,
    TouchableOpacity, ActivityIndicator,
} from 'react-native'
import {Formik} from "formik";
import * as Yup from "yup";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";
import Animated from "react-native-reanimated";
import {BottomSheetAddImage} from "../../components/BottomSheetAddImage";
import {LinearGradient} from "expo-linear-gradient";
import {Marker} from "react-native-maps";
import {CustomMap} from "../../components/CustomMap";
import {useDispatch, useSelector} from "react-redux";
import {addPost} from "../../redux/ducks/posts/actionCreators";


const SettingSchema = Yup.object().shape({
    description: Yup.string()
        .min(4, 'Description must be 4 characters long.')
        .max(30, 'Too Long!')
        .required('Required'),
});

import {showMessage, hideMessage} from "react-native-flash-message";

export const AddPostPage = ({navigation}) => {
    const {postList} = useSelector((state) => state.rePosts)
    const dispatch = useDispatch();
    const {addPostInProgress, addPostError} = useSelector(state => state.rePosts)

    const [image, setImage] = useState('');
    const [imageError, setImageError] = useState('')

    const bs = React.createRef();
    const fall = new Animated.Value(1);

    const [markerCord, setMarkerCord] = useState({
        latitude: 50.450001,
        longitude: 30.523333,
    })

    const handleChangePointCoordinate = (value) => {
        if (value.coords) {
            setMarkerCord(value.coords)
        } else {
            setMarkerCord(value)
        }
    }

    const handleChangeImage = (value) => {
        setImage(value)
        setImageError('')
    }

    const handleSubmitAddPostForm = (value) => {
        if (image) {
            dispatch(addPost({image, markerCord, value}))
        } else {
            setImageError('Error is Required')
        }

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
                            onSubmit={values => handleSubmitAddPostForm(values)}
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

                                    {imageError ? (
                                        <Animatable.View animation="fadeInLeft" duration={500}>
                                            <Text style={styles.errorMsg}>{imageError}</Text>
                                        </Animatable.View>) : null
                                    }

                                    <View style={styles.line}/>

                                    <View style={styles.mapContainer}>
                                        <Text style={styles.text_footer}>Select a place on the map </Text>
                                        <CustomMap
                                            cord={markerCord}
                                            postList={postList}
                                            handleChangePointCoordinate={handleChangePointCoordinate}>

                                            <Marker draggable
                                                    pinColor={'green'}
                                                    coordinate={markerCord}
                                                    onDragEnd={(e) => handleChangePointCoordinate(e.nativeEvent.coordinate)}
                                            />

                                        </CustomMap>
                                    </View>

                                    <View style={styles.line}/>

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

                                    <View style={styles.line}/>

                                    <View style={styles.button}>
                                        <TouchableOpacity
                                            style={styles.signIn}
                                            onPress={handleSubmit}
                                            disabled={addPostInProgress}
                                        >
                                            <LinearGradient
                                                colors={['#08d4c4', '#01ab9d']}
                                                style={styles.signIn}
                                            >
                                                {addPostInProgress ?
                                                    <ActivityIndicator size="large" color="#00ff00"/> :
                                                    <Text style={[styles.textSign, {
                                                        color: '#fff'
                                                    }]}>Submit</Text>
                                                }
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
    line: {
        width: '100%',
        marginTop: 10,
        borderColor: '#646363',
        borderWidth: 1,
        borderRadius: 1
    },
    mapContainer: {
        width: '100%',
        height: 350,
        marginBottom: 40
    }


});