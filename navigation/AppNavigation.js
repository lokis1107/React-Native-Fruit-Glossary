import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screen/HomeScreen";
import ProductScreen from "../screen/ProductScreen";
import CartScreen from "../screen/CartScreen";
import WelcomeScreen from "../screen/WelcomeScreen";
import SignInScreen from "../screen/SignInScreen";
import SignUpScreen from "../screen/SignUpScreen";
import useAuth from '../hooks/useAuth'

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();

  const {user} = useAuth()

  if(user){
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Product" component={ProductScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Cart" component={CartScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    );
  }
  else{
    return (
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown:false}}/>
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Product" component={ProductScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Cart" component={CartScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
};

export default AppNavigation;
