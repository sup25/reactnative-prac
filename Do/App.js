import { Button, TextInput, View, Image } from "react-native";
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

export default function App() {
  const [imageUris, setImageUris] = useState([]);
  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri]);
  };
  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri));
  };
  return (
    <Screen>
      {/* <Button title="Select Image" onPress={selectImage} />
      {imageUri && (
        <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      )} */}
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </Screen>
  );
}

/*  <GestureHandlerRootView style={{ flex: 1 }}> */
/*  </GestureHandlerRootView> */
