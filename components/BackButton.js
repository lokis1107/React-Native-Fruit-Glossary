import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-row justify-start mx-3 my-5">
      <TouchableOpacity
        className="border-gray-100 border rounded-2xl p-2"
        style={{ backgroundColor: "rgba(255,255,255, 0.2)" }}
        onPress={() => navigation.goBack()}
      >
        <ChevronLeftIcon size={30} color={"black"} />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;
