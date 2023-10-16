import React, { useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Platform } from 'react-native';
import AppButton from '../components/button';
import * as Notifications from 'expo-notifications';

export default function NotificationScreen() {

    const localNotification = async () => {
        const status = await Notifications.getPermissionsAsync();
        if (status.granted) {
            Notifications.scheduleNotificationAsync({
                content: {
                    title:'Title Notification',
                    body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                },
                trigger: null,
            });
        } else {
            alert('Push Notifications Permission is not Granted');
        }
    }

    async function registerForPushNotificationsAsync() {
        if (Platform.OS == 'android') {
            await Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
            });
        }

        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Push Notifications Permission is not Granted');
            return;
        }
    }

    useEffect(() => {
        registerForPushNotificationsAsync();
    },[]);

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