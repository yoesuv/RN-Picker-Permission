import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import AppButton from '../components/button';
import { RootStackParamsList } from './root-stack-params';

type homeScreenProp = StackNavigationProp<RootStackParamsList, 'Home'>;

export default function Home() { 
    const navigation = useNavigation<homeScreenProp>();
    return <SafeAreaView style={styles.container}>
        <View style={styles.content}>
            <View style={styles.button}>
                <AppButton title="Gallery" onPress={() => {
                    navigation.navigate('Gallery');
                }} />
            </View>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 24,
    },
    content: {
        paddingHorizontal: 24,
        width: "100%",
    },
    button: {
        height: 50,
    }
  });