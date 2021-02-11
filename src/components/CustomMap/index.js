import React, {useEffect, useState} from 'react'
import * as Location from "expo-location";
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from "react-native-maps";
import {Image, StyleSheet, Text, View} from "react-native";

export const CustomMap = (props) => {
    const {cord, handleChangePointCoordinate} = props

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest})
                .then(location => {
                    setLocation(location);
                    {
                        cord ? handleChangePointCoordinate(location) : null
                    }
                }).catch(e => setErrorMsg(e));
        })();
    }, []);


    if (!location) {
        return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><Text>Loading</Text>
            <Text>{errorMsg}</Text></View>
    }

    return (
        <MapView style={styles.map}
                 provider={PROVIDER_GOOGLE}
                 initialRegion={{
                     latitude: location.coords.latitude,
                     longitude: location.coords.longitude,
                     latitudeDelta: 0.0036,
                     longitudeDelta: 0.0121
                 }}
        >
          {/*  {location ?
                <Marker
                    coordinate={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                    }}
                    image={require('../../../assets/map_marker.png')}
                    title="Test Title"
                    description="This is the test description"
                >
                    <Callout>
                        <View>
                            <View style={styles.bubble}>
                                <Text style={styles.name}>Fishing point 1</Text>
                                <Text>A short description</Text>
                                <Image
                                    style={styles.image}
                                    source={{uri: 'https://avatars.githubusercontent.com/u/36710059?s=460&u=2032a7eff0aabfcb796a018cf23c4b85a1131dd0&v=4'}}/>
                            </View>

                            <View style={styles.arrowBorder}/>
                            <View style={styles.arrow}/>
                        </View>
                    </Callout>
                </Marker> : null}*/}
            <Marker
                coordinate={{
                    latitude: 50.426455966277494,
                    longitude: 30.57975769042969,
                }}
                title="Test Title"
                description="This is the test description"
            >
                <Callout>
                    <View>
                        <View style={styles.bubble}>
                            <Text style={styles.name}>Fishing point 1</Text>
                            <Text>A short description</Text>
                           {/* <Image
                                style={styles.image}
                                source={{uri: 'https://avatars.githubusercontent.com/u/36710059?s=460&u=2032a7eff0aabfcb796a018cf23c4b85a1131dd0&v=4'}}/>*/}
                        </View>

                        <View style={styles.arrowBorder}/>
                        <View style={styles.arrow}/>
                    </View>
                </Callout>
            </Marker>

            <MapView.Polygon
                coordinates={[
                    {
                        latitude: 50.410486715264035,
                        longitude: 30.580101013183597
                    },
                    {
                        latitude: 50.396262987870436,
                        longitude: 30.580444335937504
                    },
                    {
                        latitude: 50.394949813205464,
                        longitude: 30.59555053710938
                    },
                    {
                        latitude: 50.41289338526561,
                        longitude: 30.59555053710938
                    }
                ]}
                fillColor="rgba(0, 200, 0, 0.5)"
                strokeColor="rgba(0,0,0,0.5)"
                strokeWidth={2}
            />
            {props.children}
        </MapView>
    )
}


const styles = StyleSheet.create({

    map: {
        width: '100%',
        height: '100%',
    },
    bubble: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
        width: 150,
    },
    // Arrow below the bubble
    arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32,
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -0.5,
        // marginBottom: -15
    },
    // Character name
    name: {
        fontSize: 16,
        marginBottom: 5,
    },
    // Character image
    image: {
        width: '100%',
        height: 20,
    },
});