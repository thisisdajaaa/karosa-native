import React, { useState, useCallback } from "react";

import { Props as HeaderProps } from "../../../components/base-screen/types";
import { Screen } from "../../../components/base-screen";
import { useNavigation } from "@react-navigation/native";
import { View, CheckBox } from "react-native";
import { useMemoizedSelector } from "@app/hooks";
import { Props as ButtonProps } from "@app/components/button/types";
import { useDispatch } from "react-redux";
import { actions, selectors } from "@app/redux/auth";
import { actions as regionActions } from "@app/redux/location";
import { selectors as locationSelector } from "@app/redux/location";
import { FormikContext, useFormik } from "formik";
import { newAddressStyle } from "./styles";
import { BaseText } from "../../../components/base-text";
import { DetailedAddress } from "../../../components/list/list-address/detailed-address-input";
import {
  AddressInput,
  AddressInputPicker,
} from "../../../components/list/list-address/";
import {
  AddressInputProps,
  AddressSelectionProps,
  DetailedAddressProps,
} from "components/list/list-address/types";
import { SubmitButton } from "@app/components/formik/submit-button";

import { NewAddressRequest } from "redux/auth/models";
import { validationSchema } from "./validation";
import { useEffect } from "react";
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

  const getRegionResponse = useCallback(
    () => dispatch(regionActions.callRegionApi.request()),
    [dispatch]
  );
  useEffect(() => {
    getRegionResponse();
  }, []);

  const formikBag = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      region: "",
      province: "",
      barangay: "",
      detailed_address: "",
    },
    onSubmit: (values) => {
      console.log(values);
      const request: NewAddressRequest = {
        name: values.fullName,
        phoneNo: values.phoneNumber,
        detailed_address: values.region + values.province + values.barangay,
        isDefaultAddress: true,
        barangayId: 0,
      };

      // callNewAddressApi(request);
      console.log(regionResponse);
    },
    validationSchema,
  });

  const regionProps: AddressSelectionProps = {
    name: "region",
    label: "Region",
    placeholder: "Choose Region",
    data: regionData,
  };
  const provinceProps: AddressSelectionProps = {
    name: "province",
    label: "Province",
    placeholder: "Choose Province",
    data: provinceData,
  };
  const brgyProps: AddressSelectionProps = {
    name: "barangay",
    label: "Barangay",
    placeholder: "Choose Barangay",
    data: barangayData,
  };

  const regionResponse = useMemoizedSelector(
    locationSelector.getRegionResponse
  );

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
  const DetailedAddressProps: DetailedAddressProps = {
    name: "detailedAddress",
    detailedInput: {
      placeholder: "Set Detailed Address",
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
            <DetailedAddress {...DetailedAddressProps} />
          </View>

          <View style={newAddressStyle.newContainer}>
            <BaseText style={newAddressStyle.TextStyle}>
              Set as default address
            </BaseText>
            <View style={newAddressStyle.checkboxContainer}>
              <CheckBox value={isSelected} onValueChange={setSelection} />
            </View>
            <BaseText style={{ color: "red", paddingLeft: 16 }}>
              {formikBag.errors && Object.values(formikBag.errors)[0]}
            </BaseText>
            <View style={newAddressStyle.submitbuttonParent}>
              <SubmitButton {...SubmitButtonProps} />
            </View>
          </View>
        </View>
      </Screen>
    </FormikContext.Provider>
  );
};
export default NewAddressScreen;
