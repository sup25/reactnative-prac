import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../component/ListItem";

const initialMessage = [
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

import Screen from "../component/Screen";
import ListItemSeprator from "../component/ListItemSeprator";
import ListItemDeleteAction from "../component/ListItemDeleteAction";
function MessageScreen(props) {
  const [messages, setMessage] = useState(initialMessage);
  const [refreshing, setRefresing] = useState(false);

  const handleDelete = (message) => {
    setMessage(messages.filter((m) => m.id !== message.id));
  };
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeprator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessage([
            {
              id: 1,
              title: "T1",
              description: "D1",
              image: require("../assets/profile.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({});
export default MessageScreen;
