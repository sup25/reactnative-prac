import React from "react";
import Screen from "../component/Screen";
import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import Card from "../component/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";

const listings = [
  {
    id: 1,
    title: "lamp for sale",
    price: 100,
    image: require("../assets/background.jpg"),
  },
  {
    id: 2,
    title: "chair in great condition",
    price: 100,
    image: require("../assets/chair.jpg"),
  },
];

function ListingScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAIL, item)}
          />
        )}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});
export default ListingScreen;
