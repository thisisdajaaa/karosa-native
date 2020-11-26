import React, { useState, useCallback } from "react";

import { Props as HeaderProps } from "../../../components/base-screen/types";
import { Screen } from "../../../components/base-screen";
import { useNavigation } from "@react-navigation/native";
import { View, CheckBox } from "react-native";
import { AppButton } from "@app/components/button";
import { Props as ButtonProps } from "@app/components/button/types";
import routes from "@app/navigators/routes";
import { useDispatch } from "react-redux";
import { actions, selectors } from "@app/redux/auth";
import { FormikContext, useFormik } from "formik";
import { newAddressStyle } from "./styles";
import { BaseText } from "../../../components/base-text";
import {
  AddressInput,
  AddressInputPicker,
} from "../../../components/list/list-address";
import {
  AddressInputProps,
  AddressSelectionProps,
} from "components/list/list-address/types";
import { SubmitButton } from "@app/components/formik/submit-button";

import { NewAddressRequest } from "redux/auth/models";
import { validationSchema } from "./validation"
const regionData = [
  {
    id: 1,
    value: "Region1",
  },
  {
    id: 2,
    value: "Region2",
  },
  {
    id: 3,
    value: "Region3",
  },
];
const provinceData = [
  {
    id: 1,
    value: "Cebu",
  },
  {
    id: 2,
    value: "Davao",
  },
  {
    id: 3,
    value: "Negros Oriental",
  },
];
const barangayData = [
  {
    id: 1,
    value: "Dumlog",
  },
  {
    id: 2,
    value: "Tabunok",
  },
  {
    id: 3,
    value: "Poblacion",
  },
];



const NewAddressScreen: React.FC = () => {
  const { goBack } = useNavigation();
  const [isSelected, setSelection] = useState(false);
  const dispatch = useDispatch();

  const callNewAddressApi = useCallback(
    (request: NewAddressRequest) =>
      dispatch(actions.callNewAddressApi.request(request)),
    [dispatch]
  );

  const formikBag = useFormik({
    initialValues: { fullName: "", phoneNumber: "" },
    onSubmit: (values) => {
      console.log(values)
    },
    validationSchema,
  });

  const regionProps: AddressSelectionProps = {
    name: "Region",
    placeholder: "Choose Region",
    data: regionData,
  };
  const provinceProps: AddressSelectionProps = {
    name: "Province",
    placeholder: "Choose Province",
    data: provinceData,
  };
  const brgyProps: AddressSelectionProps = {
    name: "Barangay",
    placeholder: "Choose Barangay",
    data: barangayData,
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
  const fullNameProps: AddressInputProps = {
    name: "fullName",
    addressInput: {
      label: "Full Name",
      placeholder: "Set Full Name",
    },
  };
  const phoneNumberProps: AddressInputProps = {
    name: "phoneNumber",
    addressInput: {
      label: "Phone Number",
      placeholder: "Set Phone Number",
    },
  };
  const SubmitButtonProps: ButtonProps = {
    title: "Submit",
    containerStyle: newAddressStyle.btnSubmtContainer,
    textStyle: newAddressStyle.txtBtnSubmit,
  };

  return (
    <FormikContext.Provider value={formikBag}>
      <Screen {...headerProps}>
        <View style={{ marginTop: 10 }}>
          <AddressInput {...fullNameProps} />
          <AddressInput {...phoneNumberProps} />
          <AddressInputPicker {...regionProps} />
          <AddressInputPicker {...provinceProps} />
          <AddressInputPicker {...brgyProps} />
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
              <CheckBox value={isSelected} onValueChange={setSelection} />
            </View>
            <View style={newAddressStyle.submitbuttonParent}>
              <SubmitButton {...SubmitButtonProps}/>
            </View>
          </View>
        </View>
      </Screen>
    </FormikContext.Provider>
  );
};
export default NewAddressScreen;
