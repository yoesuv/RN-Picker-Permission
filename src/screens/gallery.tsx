import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AppButton from '../components/button';

export default function Gallery() {

    const [image, setImage] = useState(null)

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            quality: 0.8,
          });
        console.log(`Gallery Screen # ${JSON.stringify(result)}`);
        if (!result.cancelled) {

        }
    }

    return <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <View style={styles.button}>
                <AppButton title="Open Gallery" onPress={pickImage} />
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