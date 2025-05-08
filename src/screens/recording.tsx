import { SafeAreaView, Text, View, StyleSheet } from "react-native";

export default function RecordingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>Recording Screen</Text>
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
  label: {
    fontSize: 16,
  },
});
