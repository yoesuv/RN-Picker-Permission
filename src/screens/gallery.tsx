import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AppButton from '../components/button';
import SizedBox from '../components/sized-box';

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
            <View style={styles.contentImage}>
                { image != null ? <Text>Ada Gambarnya</Text> : <SelectImage /> }
            </View>
            <SizedBox height={12} />
            <View style={styles.button}>
                <AppButton title="Open Gallery" onPress={pickImage} />
            </View>
        </View>
    </SafeAreaView>
}

function SelectImage(): JSX.Element {
    return <View style={styles.contentSelect}>
        <Text style={styles.labelSelect}>Select an Image</Text>
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
    }
  });