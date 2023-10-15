import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import SizedBox from '../components/sized-box';
import AppButton from '../components/button';

export default function NotificationScreen() {

    const localNotification = async () => {
        console.log("NotificationScreen # local notification");
    }

    return <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <View style={styles.button}>
                <AppButton title="Local Notification" onPress={localNotification} />
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