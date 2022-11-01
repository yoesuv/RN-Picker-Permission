import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import * as Location from 'expo-location';
import AppButton from '../components/button';
import SizedBox from '../components/sized-box';
import { LocationObject } from 'expo-location';

export default function LocationScreen() { 

    const [ userLocation, setUserLocation ] = useState<LocationObject | null>(null);

    const pickLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            return;
        } 
        let userLocation = await Location.getLastKnownPositionAsync({});
        console.log(userLocation);
        setUserLocation(userLocation)
    }

    return <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.label}>User Last Known Location</Text>
            <SizedBox height={12} />
            <View>
                <Text style={styles.label}>Latitude : { userLocation?.coords.latitude }</Text>
                <Text style={styles.label}>Longitude : { userLocation?.coords.longitude }</Text>
            </View>
            <SizedBox height={24} />
            <View style={styles.button}>
                <AppButton title="Get User Location" onPress={pickLocation} />
            </View>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        paddingTop: 24,
        paddingHorizontal: 24,
    },
    label: {
        fontSize: 16,
    },
    button: {
        height: 50,
    },
})