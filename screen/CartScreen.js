import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { cartItems } from "../store";
import CartItems from "../components/CartItems";

const CartScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-orange-50">
      <View className="flex-row justify-start mx-3 my-5">
        <TouchableOpacity
          className="border-gray-300 border rounded-2xl p-2"
          style={{ backgroundColor: "rgba(255,255,255, 0.2)" }}
          onPress={() => navigation.goBack()}
        >
          <ChevronLeftIcon size={30} color={"black"} />
        </TouchableOpacity>
      </View>
      <View className="mt-3 mx-5 flex-row ">
        <Text className="text-3xl font-bold text-gray-900">Your </Text>
        <Text className=" text-3xl font-bold text-yellow-500">Cart</Text>
      </View>
      <View>
        {cartItems.map((item, index) => (
          <CartItems fruit={item} key={index} />
        ))}
      </View>
      <TouchableOpacity>
        <View className="flex-row justify-center mt-10 p-5 bg-yellow-500 px-5 rounded-2xl mx-8">
          <Text className="text-lg font-bold text-white">Payment</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CartScreen;
