import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SalesCard = ({ fruit }) => {
  const navigation = useNavigation();

  return (
    <View className="mr-6">
      <TouchableOpacity
        className="flex-row justify-center -mb-11 z-20"
        onPress={() =>
          navigation.navigate("Product", { ...fruit, color: fruit.color(1) })
        }
      >
        <Image
          source={fruit.image}
          style={{
            height: 67,
            width: 67,
            shadowColor: fruit.shad,
            shadowRadius: 40,
            shadowOffset: { width: 0, height: 50 },
            shadowOpacity: 0.6,
          }}
        />
      </TouchableOpacity>
      <View
        style={{ backgroundColor: fruit.color(0.3), height: 75, width: 80 }}
        className="flex rounded-3xl justify-end items-center"
      >
        <Text className="font-bold text-gray-900 mb-2">${fruit.price}</Text>
      </View>
    </View>
  );
};

export default SalesCard;
