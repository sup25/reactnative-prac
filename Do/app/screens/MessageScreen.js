import React from "react";
import { FlatList } from "react-native";
import { View } from "react-native";
import ListItem from "../component/ListItem";

const message = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/profile.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/profile.jpg"),
  },
];
function MessageScreen(props) {
  return (
    <FlatList
      data={message}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({ item }) => (
        <ListItem
          title={item.title}
          subTitle={item.description}
          image={item.image}
        />
      )}
    />
  );
}

export default MessageScreen;
