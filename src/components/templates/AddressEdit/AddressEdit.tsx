/**
 *
 * AddressEdit
 * @format
 *
 */

import React, { FC, ReactElement } from "react";
import {
  ScrollView,
  View,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import { ListItem } from "react-native-elements";
import { useFormikContext } from "formik";
import { COMMON } from "@app/constants";
import { NewAddressForm } from "@app/redux/address/models";
import { theme } from "@app/styles";
import { getPlatform, listIterator } from "@app/utils";
import Header from "@app/molecules/Header";
import Icon from "@app/atoms/Icon";
import Text from "@app/atoms/Text";
import ListInput from "@app/organisms/ListInput";
import Button from "@app/atoms/Button";
import validationSchema from "@app/screens/AddressEdit/validation";
import ListSwitch from "@app/organisms/ListSwitch";

import type { PropsType } from "./types";
import { ICON_SIZE, INPUT_LENGTH } from "./config";
import AddressEditStyles from "./styles";

const AddressEditTemplate: FC<PropsType> = (props) => {
  const { routeParams, handleEditAddress, handleBack } = props;
  const { location } = routeParams;

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
        maxLen={INPUT_LENGTH.TEXT_AREA}
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

    const label = listInput(
      "label",
      "Label",
      "e.g Home / Office",
      INPUT_LENGTH.LABEL
    );

    const contactName = listInput(
      "contactName",
      "Contact Name",
      "Set Name",
      INPUT_LENGTH.NAME
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

    const isDefault = (
      <View style={AddressEditStyles.defaultContainer}>
        <ListSwitch
          title="Set as Default Address"
          name="isDefault"
          hasBottomDivider
        />
      </View>
    );

    elements.push(
      label,
      contactName,
      contactNumber,
      addressDetails,
      noteRider,
      isDefault
    );

    return listIterator(elements);
  };

  return (
    <>
      <Header
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: handleBack,
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
            <ListItem bottomDivider>
              <ListItem.Content style={AddressEditStyles.listContainer}>
                <Icon
                  group="accountSettings"
                  name="addressPin"
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  extraStyle={AddressEditStyles.addressPin}
                />
                <Text
                  text={location}
                  textStyle={AddressEditStyles.txtLocation}
                />
              </ListItem.Content>

              <Pressable
                onPress={handleEditAddress}
                style={AddressEditStyles.accountSettings}
              >
                <Icon
                  group="accountSettings"
                  name="edit"
                  width={ICON_SIZE}
                  height={ICON_SIZE}
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
