import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import AppButton from '../components/button';

export default function Gallery() {
    return <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <View style={styles.button}>
                <AppButton title="Open Gallery" onPress={() => {}} />
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
    button: {
        height: 50,
    }
  });