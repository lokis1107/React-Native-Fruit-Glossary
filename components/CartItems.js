import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const CartItems = ({fruit}) => {
    const navigation = useNavigation()
  return (
    <View className="px-5 pt-5 ml-2">
      <TouchableOpacity
        className="justify-center -mb-11 z-20"
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
      <View className="ml-28 flex-row justify-between items-center">
        <Text className="-mt-10 text-lg font-bold text-gray-900">
            {fruit.name}
        </Text>
        <TouchableOpacity className="-mt-10 bg-gray-300 p-2 rounded-md">
        <Text className="text-xl font-bold text-gray-900">+</Text>
        </TouchableOpacity>
        <Text className="-mt-10 text-xl font-bold text-gray-900">{fruit.qty}</Text>
        <TouchableOpacity  className="-mt-10 bg-gray-300 p-2 rounded-md">
        <Text  className="text-xl font-bold text-gray-900">-</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CartItems