import { SafeAreaView, Text, View, StyleSheet, Alert } from "react-native";
import {
  useAudioRecorder,
  AudioModule,
  RecordingPresets,
  PermissionStatus,
} from "expo-audio";
import { useState } from "react";

import AppButton from "../components/button";

export default function RecordingScreen() {
  const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const [isRecording, setIsRecording] = useState(false);
  const [recordUri, setRecordUri] = useState("");

  async function requestPermissions() {
    let g = PermissionStatus.GRANTED;
    const { status } = await AudioModule.requestRecordingPermissionsAsync();
    if (status === g) {
      record();
    } else {
      Alert.alert("Permission to access microphone was denied");
    }
  }

  const record = async () => {
    setRecordUri("");
    await audioRecorder.prepareToRecordAsync();
    audioRecorder.record();
    setIsRecording(true);
  };

  const stopRecording = async () => {
    await audioRecorder.stop();
    setRecordUri(audioRecorder.uri ?? "");
    setIsRecording(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.viewButton}>
          <AppButton
            title={isRecording ? "Stop Recording" : "Start Recording"}
            onPress={() => {
              if (isRecording) {
                stopRecording();
              } else {
                requestPermissions();
              }
            }}
          />
        </View>
        {recordUri.length > 0 && (
          <View style={styles.contentUri}>
            <Text>Recording file: </Text>
            <Text style={styles.textUri}>{recordUri}</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  viewButton: {
    width: "100%",
    height: 50,
  },
  contentUri: {
    marginTop: 10,
  },
  textUri: {
    fontSize: 12,
  },
});
