import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import BackButton from "../components/BackButton";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../config/firebase'

const SignUpScreen = () => {
  const navigation = useNavigation()
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = async()=>{
    if(mail && password){
      try{
        await createUserWithEmailAndPassword(auth, mail, password)
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
    <View className="flex-row z-20">
      <BackButton />
      <Text className="mt-8 ml-20 font-bold text-2xl">Register</Text>
    </View>
      <View className="flex-1 justify-around items-center -mt-28">
        <Image
          source={require("../image/signup.png")}
          style={{ height: 220, width: 220 }}
        />
      </View>
      <View
        className="flex-1 bg-white px-5 space-y-3 -mt-24"
        style={{ borderTopRightRadius: 50, borderTopLeftRadius: 50 }}
      >
        <Text className="text-xl font-bold text-gray-900 mt-5">Name</Text>
        <TextInput
          className="p-3 rounded-2xl bg-orange-100"
          placeholder="Enter a Name"
        />
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
        <TouchableOpacity onPress={handleSignUp}>
          <Text className="text-center font-bold text-xl text-gray-900  bg-orange-100 mx-14 py-3 rounded-2xl mt-3">
            SignUp
          </Text>
        </TouchableOpacity>
        <View className="flex-row justify-end px-5 py-2">
          <TouchableOpacity onPress={()=> navigation.navigate('SignIn')}>
            <Text className="text-lg font-bold text-gray-900">Already have an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default SignUpScreen;
