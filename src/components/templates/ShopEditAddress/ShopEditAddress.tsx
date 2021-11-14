/**
 *
 * ShopEditAddress
 * @format
 *
 */

import React, { FC, ReactElement, useMemo } from "react";
import {
  KeyboardAvoidingView,
  KeyboardTypeOptions,
  ScrollView,
  View,
} from "react-native";
import { COMMON } from "@app/constants";
import { theme } from "@app/styles";
import { getPlatform, listIterator } from "@app/utils";
import { PickerData } from "@app/redux/api-models/common";
import Header from "@app/molecules/Header";
import ListInput from "@app/organisms/ListInput";
import ListPicker from "@app/organisms/ListPicker";
import FormButton from "@app/molecules/FormButton";

import type { PropsType } from "./types";
import ShopEditAddressStyles from "./styles";

const ShopEditAddressTemplate: FC<PropsType> = (props) => {
  const { onBack, pickerValues, pickerDisable } = props;

  const picker = useMemo(() => {
    return pickerValues;
  }, [pickerValues]);

  const isIOS = getPlatform.getInstance() === "ios";

  const listInput = (
    name: string,
    label: string,
    placeholder: string,
    keyboardType?: KeyboardTypeOptions
  ) => {
    return (
      <ListInput
        name={name}
        label={label}
        placeholder={placeholder}
        hasBottomDivider
        required
        variation={COMMON.VARIATION.TWO}
        keyboardType={keyboardType ? keyboardType : "default"}
      />
    );
  };

  const listAddress = (
    name: string,
    label: string,
    placeholder: string,
    info: string
  ) => {
    return (
      <ListInput
        name={name}
        label={label}
        placeholder={placeholder}
        hasBottomDivider
        required
        variation={COMMON.VARIATION.TWO}
        info={info}
      />
    );
  };

  const listInputPicker = (
    name: string,
    label: string,
    placeholder: string,
    data: PickerData[],
    disabled: boolean
  ): JSX.Element => {
    return (
      <>
        {data && (
          <ListPicker
            name={name}
            label={label}
            placeholder={placeholder}
            data={data}
            disabled={disabled}
            hasBottomDivider
            required
          />
        )}
      </>
    );
  };

  const getAddressForm = () => {
    const elements: ReactElement[] = [];

    const fullName = listInput("fullName", "Full Name", "Set Full Name");

    const phoneNumber = listInput(
      "phoneNumber",
      "Phone Number",
      "Set Phone Number",
      "number-pad"
    );

    const detailedAddress = listAddress(
      "detailedAddress",
      "Detailed Address",
      "Set Detailed Address",
      "Unit Number, House Number, Building, Street Name"
    );

    const region = listInputPicker(
      "region",
      "Region",
      "Choose Region",
      picker.regions,
      pickerDisable.regions
    );

    const province = listInputPicker(
      "province",
      "Province",
      "Choose Province",
      picker.province,
      pickerDisable.province
    );

    const cities = listInputPicker(
      "cities",
      "City",
      "Choose City",
      picker.cities,
      pickerDisable.cities
    );

    const barangay = listInputPicker(
      "barangay",
      "Barangay",
      "Choose Barangay",
      picker.barangay,
      pickerDisable.barangay
    );

    elements.push(
      fullName,
      phoneNumber,
      region,
      province,
      cities,
      barangay,
      detailedAddress
    );

    return listIterator(elements);
  };

  const getHeader = () => {
    return (
      <Header
        hasBottomDivider
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: onBack,
        }}
        centerComponent={{
          text: "Edit Address",
          style: ShopEditAddressStyles.txtHeader,
        }}
      />
    );
  };

  const getScrollableForm = () => {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <>{getAddressForm()}</>
      </ScrollView>
    );
  };

  const getContent = () => {
    return (
      <KeyboardAvoidingView
        style={ShopEditAddressStyles.container}
        behavior={isIOS ? "padding" : undefined}>
        <>{getScrollableForm()}</>
        <View style={ShopEditAddressStyles.buttonContainer}>
          <FormButton title="Submit" />
        </View>
      </KeyboardAvoidingView>
    );
  };

  return (
    <>
      <>{getHeader()}</>
      <>{getContent()}</>
    </>
  );
};

export default ShopEditAddressTemplate;
