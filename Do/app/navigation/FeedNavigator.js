import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingScreen from "../screens/ListingScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createNativeStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Listing" component={ListingScreen} />
      <Stack.Screen name="ListingDetail" component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
