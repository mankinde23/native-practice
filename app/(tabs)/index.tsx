import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  StatusBar,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Money </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
