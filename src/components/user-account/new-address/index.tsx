import React, { useState } from "react";

import { AppButton } from "../../atoms/button";
import { Props as ButtonProps } from "../../atoms/button/types";
import { Props as HeaderProps } from "../../atoms/base-screen/types";
import { Screen } from "../../atoms/base-screen";
import { useNavigation } from "@react-navigation/native";
import { View, CheckBox } from "react-native";
import { FormInput2, FormInput, FormInputSelection } from "../../atoms/formik/form-input";
import { IonSelectionProps, Props as FormInputProps } from "../../atoms/formik/form-input/types";
import { newAddressStyle } from "./styles";
import { BaseText } from "../../atoms/base-text";

const regionData = [
  {
    id: 1,
    value: 'Region1',
  },
  {
    id: 2,
    value: 'Region2',
  },
  {
    id: 3,
    value: 'Region3',
  }
];

const NewAddress: React.FC = () => {
  const { goBack } = useNavigation();
  const [isSelected, setSelection] = useState(false);

  const fullNameProps: FormInputProps = {
    name: "Full Name",
    placeholder: "Set Full Name",
  };
  const phoneProps: FormInputProps = {
    name: "Phone Number",
    placeholder: "Set Phone Number",
  };
  const regionProps: IonSelectionProps = {
    name: "Region",
    placeholder: "Choose Region",
    data : regionData,
  };
  const provinceProps: FormInputProps = {
    name: "Province",
    placeholder: "Choose Province",
  };
  const brgyProps: FormInputProps = {
    name: "Barangay",
    placeholder: "Choose Barangay",
  };

  const logoutButtonProps: ButtonProps = {
    onPress: () => console.log("Submit"),
    title: "Submit",
    containerStyle: {
      backgroundColor: "#0AA351",
      alignSelf: "center",
    },
    textStyle: {
      color: "white",
    },
  };
  const headerProps: HeaderProps = {
    header: {
      iconName: "arrow-back",
      title: "New Address",
      press: {
        left: () => goBack(),
      },
    },
  };

  return (
    <Screen {...headerProps}>
      <View style={{ marginTop: 10 }}>
        <FormInput2 {...fullNameProps} />
        <FormInput2 {...phoneProps} />
        <FormInputSelection {...regionProps} />
        <FormInput2 {...provinceProps} />
        <FormInput2 {...brgyProps} />

        <View
          style={[
            newAddressStyle.newContainer,
            { height: 95, paddingRight: 10, paddingBottom: 10 },
          ]}
        >
          <BaseText style={newAddressStyle.TextStyle}>
            Detailed Address
          </BaseText>

          <View style={newAddressStyle.textContainer}>
            <BaseText style={newAddressStyle.longText}>
              Unit Number, House Number{"\n"}Building, Street Name
            </BaseText>
          </View>
          <View style={{ alignSelf: "flex-end" }}>
            <BaseText style={newAddressStyle.setDetailStyle}>
              Set Detailed Address
            </BaseText>
          </View>
        </View>

        <View style={newAddressStyle.newContainer}>
          <BaseText style={newAddressStyle.TextStyle}>
            Set as default address
          </BaseText>
          <View style={newAddressStyle.checkboxContainer}>
            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={newAddressStyle.checkbox}
            />
          </View>
          <View style={newAddressStyle.buttonParent}>
            <AppButton {...logoutButtonProps} />
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default NewAddress;
