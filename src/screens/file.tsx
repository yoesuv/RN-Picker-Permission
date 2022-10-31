import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AppButton from '../components/button';
import SizedBox from '../components/sized-box';

export default function File() {
    return <SafeAreaView>
        <View>
            <Text>File Picker</Text>
        </View>
    </SafeAreaView>
}