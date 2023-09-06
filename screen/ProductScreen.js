import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import StarRating from "react-native-star-rating";

const ProductScreen = (props) => {
  let fruit = props.route.params;
  const navigation = useNavigation();
  return (
    <View className="flex-1" style={{ backgroundColor: fruit.color }}>
      <SafeAreaView>
        <View className="flex-row justify-start mx-3 my-5">
          <TouchableOpacity
            className="border-gray-100 border rounded-2xl p-2"
            style={{ backgroundColor: "rgba(255,255,255, 0.2)" }}
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon size={30} color={"black"} />
          </TouchableOpacity>
        </View>
        <View
          className="mt-6 mb-10 flex-row justify-center"
          style={{ shadowColor: fruit.shad }}
        >
          <Image source={fruit.image} style={{ height: 250, width: 250 }} />
        </View>
      </SafeAreaView>
      <View
        className="flex-1 bg-white px-5 space-y-2"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <Text className="mt-5 text-2xl font-bold text-gray-900">
          {fruit.name}
        </Text>
        <View className="flex-row justify-between items-center">
          <Text className="text-gray-900 font-bold mb-2">
            Description: {fruit.desc}
          </Text>
          <Text className="font-bold text-gray-900 text-lg">Sold: 230</Text>
        </View>
        <View className="mt-5">
          <StarRating
            disabled={true}
            starSize={20}
            containerStyle={{ width: 120 }}
            maxStars={5}
            rating={fruit.stars}
            emptyStarColor="gray"
            fullStar={require("../image/fullStar.png")}
          />
        </View>
        <View className="pb-5">
          <Text className="mt-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam
            pariatur, assumenda ea neque maiores id numquam eius a, minima
            voluptatum quae architecto officia atque? Atque nostrum iste vel
            distinctio eius cupiditate necessitatibus, exercitationem magnam
            laborum amet ab voluptates sequi excepturi obcaecati eligendi quod
            mollitia dolore libero natus? Temporibus, odit tempora.
          </Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text className="font-bold text-2xl text-gray-900 ml-2">
            ${fruit.price}
          </Text>
          <View
            className="px-5 py-3 flex-1 justify-between items-center mx-3 rounded-2xl"
            style={{ backgroundColor: fruit.color }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <Text className="text-lg font-bold text-gray-900 mx-10">
                Add To Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductScreen;
