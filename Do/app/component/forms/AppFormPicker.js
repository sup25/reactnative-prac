import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";
function AppFormPicker({
  items,
  name,
  PickerItemComponent,
  placeholder,
  width,
  numberOfColumns,
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <AppPicker
      numberOfColumns={numberOfColumns}
      items={items}
      onSelectItem={(item) => setFieldValue(name, item)}
      PickerItemComponent={PickerItemComponent}
      placeholder={placeholder}
      selectedItem={values[name]}
      width={width}
    >
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </AppPicker>
  );
}

export default AppFormPicker;
