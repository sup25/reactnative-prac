import { Button, TextInput, View, Image, Text } from "react-native";
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
import { useEffect, useState } from "react";
import AppTextInput from "./app/component/AppTextInput";
import AppPicker from "./app/component/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ListEditingScreen from "./app/component/ListEditingScreen";
import * as ImagePicker from "expo-image-picker";
import ImageInput from "./app/component/ImageInput";
import ImageInputList from "./app/component/ImageInputList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AuthNavigator from "./app/navigation/AuthNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import OfflineNotice from "./app/component/OfflineNotice";

export default function App() {
  return (
    <>
      <NavigationContainer theme={NavigationTheme}>
        <OfflineNotice />
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}

//practices
/* const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: "#efb810",
      tabBarActiveTintColor: "white",
    }}
  >
    <Tab.Screen name="Feed" component={FeedNavigator} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);
const Link = () => {
  const navigation = useNavigation();
  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate("TweetDetail", { id: 1 })}
    />
  );
};
const Tweets = ({ navigation }) => {
  return (
    <Screen>
      <Text>Tweets</Text>
      <Link />
    </Screen>
  );
};

const TweetDetail = ({ route }) => {
  return (
    <Screen>
      <Text>Tweet Detail {route.params.id}</Text>
    </Screen>
  );
};

const Stack = createNativeStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetDetail" component={TweetDetail} />
  </Stack.Navigator>
); */

/* const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
); */

{
  /* <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "dodgerblue" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="Tweets"
          options={{
            headerStyle: { backgroundColor: "tomato" },
            headerTintColor: "white",
          }}
          component={Tweets}
        />
        <Stack.Screen name="TweetDetail" component={TweetDetail} />
      </Stack.Navigator> */
}

//setting the header dynamic not worked
/* options={({ route }) => ({ title: route.params.id })} */

{
  /* <Button title="Select Image" onPress={selectImage} />
      {imageUri && (
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      )} */
}
/*  <GestureHandlerRootView style={{ flex: 1 }}> */
/*  </GestureHandlerRootView> */
