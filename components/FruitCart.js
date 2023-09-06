import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { HeartIcon } from "react-native-heroicons/solid";

const FruitCart = ({ fruit }) => {
  const [fav, setFav] = useState(false);

  return (
    <View
      style={{ width: 270, borderRadius: 40, backgroundColor: fruit.color(1) }}
      className="mx-5"
    >
      <View className="flex-row justify-end">
        <TouchableOpacity
          className="p-3 mx-3 my-3 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
          onPress={() => setFav(!fav)}
        >
          <HeartIcon size={28} color={fav ? fruit.shad : "white"} />
        </TouchableOpacity>
      </View>
      <View
        className="flex-row justify-center"
        style={{
          shadowColor: fruit.shad,
          elevation: 10,
        }}
      >
        <Image source={fruit.image} style={{ width: 210, height: 210 }} />
      </View>
      <View className="ml-5 my-5">
        <Text className="text-xl text-gray-900 font-bold">{fruit.name}</Text>
      </View>
      <View className="ml-5 my-3 -mt-3">
        <Text className="text-lg font-bold text-gray-900">${fruit.price}</Text>
      </View>
    </View>
  );
};

export default FruitCart;
