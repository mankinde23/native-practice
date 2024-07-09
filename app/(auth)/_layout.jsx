import React from "react";
import { View, Text } from "react-native";
import { Slot, Stack, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="sign-in"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="sign-up"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <StatusBar backgroundColor="#161622" style="light" />
    </Stack>
  );
}
