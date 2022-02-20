/**
 *
 * AddressEdit
 * @format
 *
 */

import React, { FC, ReactElement } from "react";

import type { PropsType } from "./types";
import { useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  View,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import Header from "@app/components/molecules/Header";

import Text from "@app/atoms/Text";
import { ListItem } from "react-native-elements";
import Icon from "@app/atoms/Icon";
import ListInput from "@app/components/organisms/ListInput";
import Button from "@app/atoms/Button";
import { useFormikContext } from "formik";
import { NewAddressForm } from "@app/redux/address/models";
import AddressEditStyles from "./styles";
import { theme } from "@app/styles";
import { getPlatform, listIterator } from "@app/utils";
import { COMMON } from "@app/constants";
import validationSchema from "@app/screens/AddressEdit/validation";

const AddressEditTemplate: FC<PropsType> = (props) => {
  const { details } = props;
  const { goBack } = useNavigation();
  const { submitForm, values } = useFormikContext<NewAddressForm>();

  const isIOS = getPlatform.getInstance() === "ios";

  const isValid = validationSchema.isValidSync(values);

  const listInputArea = (
    name: string,
    label: string,
    placeholder: string,
    required?: boolean
  ) => {
    return (
      <ListInput
        name={name}
        placeholder={placeholder}
        label={label}
        hasBottomDivider
        required={required}
        maxLen={200}
        variation={COMMON.VARIATION.ONE}
      />
    );
  };

  const listInput = (
    name: string,
    label: string,
    placeholder: string,
    maxLen?: number
  ) => {
    return (
      <ListInput
        name={name}
        label={label}
        placeholder={placeholder}
        hasBottomDivider
        required
        maxLen={maxLen}
        variation={COMMON.VARIATION.TWO}
      />
    );
  };

  const getAddressEdit = () => {
    const elements: ReactElement[] = [];

    const label = listInput("label", "Label", "e.g Home / Office", 20);

    const contactName = listInput(
      "contactName",
      "Contact Name",
      "Set Name",
      30
    );

    const contactNumber = listInput(
      "contactNumber",
      "Contact Number",
      "Set Contact Number"
    );

    const addressDetails = listInputArea(
      "addressDetails",
      "Address Details",
      "e.g. Floor, Unit, Room Number",
      true
    );

    const noteRider = listInputArea(
      "noteRider",
      "Note to rider",
      "e.g. Landmark, Buidling"
    );

    elements.push(label, contactName, contactNumber, addressDetails, noteRider);

    return listIterator(elements);
  };

  return (
    <>
      <Header
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: goBack,
        }}
        centerComponent={{
          text: "Edit Address",
          style: AddressEditStyles.txtHeader,
        }}
        hasBottomDivider
      />
      <KeyboardAvoidingView
        style={AddressEditStyles.container}
        behavior={isIOS ? "padding" : undefined}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={AddressEditStyles.subContainer}>
            <ListItem bottomDivider={true}>
              <ListItem.Content style={AddressEditStyles.listContainer}>
                <Icon
                  group="accountSettings"
                  name="addressPin"
                  width={20}
                  height={20}
                  extraStyle={{ marginRight: 12 }}
                />
                <Text text={details} textStyle={{ paddingRight: 18 }} />
              </ListItem.Content>

              <Pressable onPress={goBack} style={{ marginLeft: "auto" }}>
                <Icon
                  group="accountSettings"
                  name={"edit"}
                  width={20}
                  height={20}
                />
              </Pressable>
            </ListItem>
          </View>

          {getAddressEdit()}
        </ScrollView>

        <View style={AddressEditStyles.buttonContainer}>
          <Button
            title="Save Address"
            disabled={!isValid}
            onPress={submitForm}
          />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};
export default AddressEditTemplate;
