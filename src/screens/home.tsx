import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import AppButton from '../components/button';

export default function Home() { 
    return <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <View style={styles.button}>
                <AppButton title="Gallery" onPress={() => {

                }} />
            </View>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        paddingHorizontal: 24,
        width: "100%",
    },
    button: {
        height: 50,
    }
  });