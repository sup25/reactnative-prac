import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  SafeAreaView, //only works for ios
  Image,
  Button,
  Alert,
  Platform,
  StatusBar,
} from "react-native";

export default function App() {
  const handlePress = () => {
    console.log("Text pressed");
  };

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hi React Native.
      </Text>
      {/* <TouchableWithoutFeedback onPress={() => console.log("image tapped")}>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableWithoutFeedback> */}

      <Button
        title="click Me"
        onPress={
          () =>
            Alert.alert("my title", "My message", [
              { text: "Yes", onPress: () => console.log("Yes") },
              { text: "No", onPress: () => console.log("No") },
            ])
          //only works on ios
          /*    Alert.prompt("My title", "My message", (text) => console.log(text)) */
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "teal",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
