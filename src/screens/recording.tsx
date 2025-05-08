import { SafeAreaView, Text, View, StyleSheet, Alert } from "react-native";
import { useAudioRecorder, AudioModule, RecordingPresets } from "expo-audio";
import { useEffect, useState } from "react";
import AppButton from "../components/button";

export default function RecordingScreen() {
  const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  const [isRecording, setIsRecording] = useState(false);
  const [recordUri, setRecordUri] = useState("");

  const record = async () => {
    await audioRecorder.prepareToRecordAsync();
    audioRecorder.record();
    setIsRecording(true);
  };

  const stopRecording = async () => {
    await audioRecorder.stop();
    setRecordUri(audioRecorder.uri ?? "");
    setIsRecording(false);
  };

  /* useEffect(() => {
    (async () => {
      const status = await AudioModule.requestRecordingPermissionsAsync();
      if (!status.granted) {
        Alert.alert("Permission to access microphone was denied");
      }
    })();
  }, []); */

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.viewButton}>
          <AppButton
            title={isRecording ? "Stop Recording" : "Start Recording"}
            onPress={isRecording ? stopRecording : record}
          />
        </View>
        <View style={styles.contentUri}>
          <Text>Recording file: </Text>
          <Text style={styles.textUri}>{recordUri}</Text>
        </View>
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
