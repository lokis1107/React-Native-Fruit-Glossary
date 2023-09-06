import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import BackButton from "../components/BackButton";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const SignInScreen = () => {
  const navigation = useNavigation()
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignIn = async()=>{
    if(mail && password){
      try{
        await signInWithEmailAndPassword(auth, mail, password)
      }
      catch(err){
        Alert.alert("Error", "Please Enter a valid data")
      }
    }
    else{
      Alert.alert("Error","Please enter a valid data")
    }
  }
  return (
    <LinearGradient
      colors={["rgba(255, 165, 0, 1)", "rgba(255, 201, 0, 1)"]}
      className="h-full w-full flex-1"
    >
    <View className="flex z-20">
      <BackButton />
    </View>
      <View className="flex-1 justify-around items-center -mt-20">
        <Image
          source={require("../image/login.png")}
          style={{ height: 260, width: 260 }}
        />
      </View>
      <View
        className="flex-1 bg-white px-5 space-y-3"
        style={{ borderTopRightRadius: 50, borderTopLeftRadius: 50 }}
      >
        <Text className="text-center font-bold text-2xl text-gray-900 mt-2">
          Welcome Back!
        </Text>
        <Text className="text-xl font-bold text-gray-900">Email Address *</Text>
        <TextInput
          className="p-3 rounded-2xl bg-orange-100"
          placeholder="Enter a mail address"
          value={mail}
          onChangeText={(value)=> setMail(value)}
        />
        <Text className="text-xl font-bold text-gray-900">Password *</Text>
        <TextInput
          className="p-3 rounded-2xl bg-orange-100"
          placeholder="Enter a strong password"
          secureTextEntry
          value={password}
          onChangeText={(value)=> setPassword(value)}
        />
        <TouchableOpacity onPress={handleSignIn}>
          <Text className="text-center font-bold text-xl text-gray-900  bg-orange-100 mx-14 py-3 rounded-2xl mt-3">
            SignIn
          </Text>
        </TouchableOpacity>
        <View className="flex-row justify-end px-5 py-2">
          <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
            <Text className="text-lg font-bold text-gray-900">Create a new account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default SignInScreen;
