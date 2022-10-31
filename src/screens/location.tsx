import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';

export default function Location() { 
    return <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <Text>Get User Location</Text>
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
})