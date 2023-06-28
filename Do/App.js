import { TextInput, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/component/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Screen from "./app/component/Screen";
import Icon from "./app/component/Icon";
import ListItem from "./app/component/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingScreen";
import { useState } from "react";
import AppTextInput from "./app/component/AppTextInput";
import AppPicker from "./app/component/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";

export default function App() {
  return (
    /*  <GestureHandlerRootView style={{ flex: 1 }}> */
    <LoginScreen />
    /* </GestureHandlerRootView> */
  );
}
