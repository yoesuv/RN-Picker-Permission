import { SafeAreaView, Text, View, StyleSheet, Alert } from "react-native";
import {
  useAudioRecorder,
  AudioModule,
  RecordingPresets,
  PermissionStatus,
  createAudioPlayer,
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

  async function playAudio() {
    const player = createAudioPlayer(recordUri);
    player.play();
    player.loop = false;
    player.addListener("playbackStatusUpdate", (status) => {
      if (status.didJustFinish) {
        player.release();
      }
    });
  }

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
        {recordUri.length > 0 && (
          <View style={styles.contentPlay}>
            <View style={styles.viewButtonPlay}>
              <AppButton title="Play Record" onPress={playAudio} />
            </View>
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
    width: "100%",
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
  contentPlay: {
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  viewButtonPlay: {
    width: "50%",
    height: 50,
  },
});
