import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={["rgba(255, 165, 0, 1)", "rgba(255, 201, 0, 1)"]}
      className="h-full w-full flex-1"
    >
      <View className="flex-1 justify-around">
        <Text className="text-center text-3xl font-bold text-gray-900">
          Let's get started
        </Text>
        <View className="items-center">
          <Image
            source={require("../image/welcome.png")}
            style={{ height: 300, width: 300 }}
          />
        </View>
        <View className="items-center">
          <TouchableOpacity
            className="p-3 shadow px-28 py-5 rounded-2xl bg-orange-100"
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text className="text-xl font-bold text-gray-900">LogIn</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-end px-5">
          <Text className="text-xl font-bold text-gray-900 mt-1">
            Create a new account{" "}
          </Text>
          <TouchableOpacity
            className="shadow rounded-xl bg-orange-100 px-5 py-1"
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text className="text-xl font-bold text-gray-900">Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default WelcomeScreen;
