import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  StatusBar,
} from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-blue-500 text-3xl">Money</Text>

      <Link href={"/profile"} style={{ color: "blue" }}>
        Go to some path
      </Link>
    </View>
  );
}
