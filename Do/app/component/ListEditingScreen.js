import { StyleSheet } from "react-native";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../component/forms";
import Screen from "../component/Screen";
import AppFormPicker from "./forms/AppFormPicker";
import CategoryPickerItem from "./CategoryPickerItem";
import FormImagePicker from "./forms/FormImagePicker";
import { useLocation } from "../hooks/useLocation";
const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});
const categories = [
  { label: "furniture", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Clothing", value: 2, backgroundColor: "green", icon: "email" },
  { label: "Camera", value: 3, backgroundColor: "blue", icon: "lock" },
  { label: "Bike", value: 3, backgroundColor: "blue", icon: "home" },
];

function ListEditingScreen(props) {
  const location = useLocation();

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppFormPicker
          items={categories}
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
          name="category"
          placeholder="Category"
          width="50%"
        />

        <AppFormField
          multiline
          numberOfLines={3}
          maxLength={255}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default ListEditingScreen;
