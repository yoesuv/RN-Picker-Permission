import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import SizedBox from '../components/sized-box';
import AppButton from '../components/button';
import * as Notifications from 'expo-notifications';

export default function NotificationScreen() {

    // notification handler
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: false,
          shouldSetBadge: false,
        }),
      });

    const localNotification = async () => {
        Notifications.scheduleNotificationAsync({
            content: {
                title:'Title Notification',
                body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            trigger: null,
        });
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