import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Screen from "../component/Screen";
import ListItem from "../component/ListItem";
import colors from "../config/colors";
import Icon from "../component/Icon";
import ListItemSeprator from "../component/ListItemSeprator";
const menuItems = [
  {
    title: "My listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];
function AccountScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="userName"
          subTitle="userName@gmail.com"
          image={require("../assets/profile.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menueItem) => menueItem.title}
          ItemSeparatorComponent={ListItemSeprator}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => navigation.navigate(item.targetScreen)}
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
