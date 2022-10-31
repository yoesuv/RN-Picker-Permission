import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import AppButton from '../components/button';
import SizedBox from '../components/sized-box';

export default function FileScreen() {

    const [file, setFile] = useState<any | null>(null);
    const [fileName, setFileName] = useState<any | null>(null);

    const chooseFile = async () => {
        let result = await DocumentPicker.getDocumentAsync({
            type: ['application/pdf', 'image/png'],
        });
        if (result.type === 'success') {
            setFileName(result.name)
            setFile(result.uri)
        }
    }

    return <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.label}>File Name : { fileName }</Text>
            <SizedBox height={24} />
            { file != null ? <Text style={styles.label} >{ file }</Text> : <ChooseFile /> }
            <SizedBox height={24} />
            <View style={styles.button}>
                <AppButton title="Choose File" onPress={chooseFile} />
            </View>
        </View>
    </SafeAreaView>
}

function ChooseFile(): JSX.Element {
    return <Text style={styles.label}>Choose a File</Text>
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