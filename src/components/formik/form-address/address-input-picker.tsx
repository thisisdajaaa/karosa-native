import React, { useState, useEffect, useCallback } from "react";
import { AddressSelectionProps } from "./types";
import { View } from "react-native";
import { BaseText } from "../../base-text";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./styles";
import { TextInput } from "../../input";
import { useFormikContext, useField } from "formik";

export const AddressInputPicker: React.FC<AddressSelectionProps> = React.memo(
  ({ name, label, data, placeholder }) => {

    const [, meta, helpers] = useField(name);
    const { validateOnChange } = useFormikContext();
    const [currentValue, setCurrentValue] = useState(
      meta.value || meta.initialValue || data[0].value
    );

    useEffect(() => {
      setCurrentValue(meta.value);
    }, [meta.value]);

    const handleChange = useCallback(
      async (text: string) => {
        console.log(currentValue)
        setCurrentValue(text)
        helpers.setValue(text);
      },
      [helpers, validateOnChange]
    );

    useEffect(() => {
      setCurrentValue(currentValue)
      helpers.setValue(currentValue);
    }, [])

    return (
      <React.Fragment>
        <View style={styles.pickerContainer}>
          <BaseText style={styles.textStyle}>{label}</BaseText>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder={placeholder}
              value={currentValue}
              onChangeText={handleChange}
              style={styles.inputStyle}
              customStyles={styles.customStyle}
            />
            <Picker
              mode="dialog"
              prompt={placeholder}
              selectedValue={currentValue}
              onValueChange={(itemValue) => {
                helpers.setValue(itemValue)
              }}
              style={styles.picker}
            >
              {data.map((data) => (
                <Picker.Item
                  value={data.value}
                  key={data.id}
                  label={data.value}
                />
              ))}
            </Picker>
          </View>


        </View>
      </React.Fragment>
    );
  }
);
