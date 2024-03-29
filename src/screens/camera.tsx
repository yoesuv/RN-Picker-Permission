import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AppButton from '../components/button';
import SizedBox from '../components/sized-box';

export default function CameraScreen() {

    const [image, setImage] = useState<ImagePicker.ImagePickerAsset | null>(null);

    const pickCamera = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            quality: 0.8,
          });
          if (!result.canceled) {
            if (result.assets.length > 0) {
                setImage(result.assets[0]);
            }
        }
    }

    return <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <View style={styles.contentImage}>
                { image != null ? <Image source={{ uri: image.uri }} style={styles.contentImage} /> : <TakeImage /> }
            </View>
            <SizedBox height={24} />
            <View style={styles.button}>
                <AppButton title="Open Camera" onPress={pickCamera} />
            </View>
        </View>
    </SafeAreaView>
}

function TakeImage(): JSX.Element {
    return <View style={styles.contentSelect}>
        <Text style={styles.labelSelect}>Take image from Camera</Text>
    </View>
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
    contentImage: {
        borderWidth: 1,
        height: 200,
    },
    contentSelect: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelSelect: {
        fontSize: 16,
    },
    button: {
        height: 50,
    },
})