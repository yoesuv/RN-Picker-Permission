import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AppButton from '../components/button';
import SizedBox from '../components/sized-box';

export default function File() {

    const chooseFile = () => {

    }

    return <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.label}>File Picker</Text>
            <SizedBox height={24} />
            <View style={styles.button}>
                <AppButton title="Choose File" onPress={chooseFile} />
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