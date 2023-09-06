import {
  View,
  Text,
  SafeAreaView,
  VirtualizedList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  ArrowLeftOnRectangleIcon,
  Bars3CenterLeftIcon,
  ShoppingCartIcon,
} from "react-native-heroicons/solid";
import { Fruits, categories } from "../store";
import FruitCart from "../components/FruitCart";
import SalesCard from "../components/SalesCard";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const HomeScreen = () => {
  const [active, setActive] = useState("Oranges");
  const navigation = useNavigation();

  const handleLogout = async()=>{
    await signOut(auth)
  }

  return (
    <SafeAreaView className="bg-orange-50 flex-1">
      <View>
        {/* topBar */}
        <View className="flex-row px-4 justify-between items-center mt-3">
          <Bars3CenterLeftIcon color={"black"} size={30} />
          <TouchableOpacity
            className="p-2 bg-orange-100 rounded-2xl ml-52"
            onPress={() => navigation.navigate("Cart")}
          >
            <ShoppingCartIcon size={30} color={"orange"} />
          </TouchableOpacity>
          <TouchableOpacity
            className="p-2 bg-orange-100 rounded-2xl"
            onPress={handleLogout}
          >
            <ArrowLeftOnRectangleIcon size={30} color={'orange'}/>
          </TouchableOpacity>
        </View>
        <View className="mt-5">
          <Text className="font-bold text-3xl to-gray-900 ml-5">
            Fruits and Vegetable
          </Text>
        </View>

        {/* categories */}
        <ScrollView
          className="mt-8 relative"
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          {categories.map((item, index) => {
            let isActive = item == active;
            let text = `text-xl ${isActive ? "font-bold" : ""}`;
            return (
              <TouchableOpacity
                className="mr-4 ml-5"
                key={index}
                onPress={() => setActive(item)}
              >
                <Text className={text}>{item}</Text>
                {isActive ? (
                  <Text className="font-bold text-orange-500 text-xl -mt-4 ml-1">
                    __ _
                  </Text>
                ) : null}
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Fruits */}

        <View className="mt-8">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Fruits.map((item, index) => (
              <FruitCart fruit={item} key={index} />
            ))}
          </ScrollView>
        </View>
      </View>

      {/* Hot Sales */}
      <View className="ml-8 mt-8">
        <Text className="text-lg font-bold text-gray-900">Hot Sales</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-2"
        >
          {[...Fruits].reverse().map((item, index) => (
            <SalesCard fruit={item} key={index} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
