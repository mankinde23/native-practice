import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function CustomButton({
  title,
  containerStyles,
  handlePress,
  textStyles,
  isLoading,
}) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={` bg-secondary-100 rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
