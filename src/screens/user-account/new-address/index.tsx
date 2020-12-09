import React, { useState, useCallback } from "react";

import { Props as HeaderProps } from "../../../components/base-screen/types";
import { Screen } from "../../../components/base-screen";
import { useNavigation } from "@react-navigation/native";
import { View, CheckBox } from "react-native";
import { useMemoizedSelector } from "@app/hooks";
import { Props as ButtonProps } from "@app/components/button/types";
import { useDispatch } from "react-redux";
import { actions } from "@app/redux/auth";
import { actions as regionActions } from "@app/redux/location";
import { actions as provinceActions } from "@app/redux/location";
import { actions as citiesActions } from "@app/redux/location";
import { actions as barangayActions } from "@app/redux/location";

import { selectors as locationSelector } from "@app/redux/location";
import { FormikContext, useFormik } from "formik";
import { newAddressStyle } from "./styles";
import { BaseText } from "../../../components/base-text";
import {
  AddressInput,
  AddressInputPicker,
  DetailedAddressInput,
} from "../../../components/formik/form-address";
import {
  AddressInputProps,
  DetailedAddressProps,
  SelectionData,
} from "components/formik/form-address/types";
import { SubmitButton } from "@app/components/formik/submit-button";

import { NewAddressRequest } from "redux/auth/models";
import { ProvinceResponse } from "redux/location/models";
import { validationSchema } from "./validation";
import { useEffect } from "react";
import { RegionResponse } from "redux/location/models";
import { CitiesResponse } from "redux/location/models";
import { BarangayResponse } from "redux/location/models";

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

  const getProvinceResponse = useCallback(
    () => dispatch(provinceActions.callProvinceApi.request()),
    [dispatch]
  );
  useEffect(() => {
    getProvinceResponse();
  }, []);

  const getCitiesResponse = useCallback(
    () => dispatch(citiesActions.callCitiesApi.request()),
    [dispatch]
  );
  useEffect(() => {
    getCitiesResponse();
  }, []);

  const getBarangayResponse = useCallback(
    () => dispatch(barangayActions.callBarangayApi.request()),
    [dispatch]
  );
  useEffect(() => {
    getBarangayResponse();
  }, []);

  const formikBag = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      region: "",
      province: "",
      barangay: "",
      detailedAddress: "",
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
      callNewAddressApi(request);
    },
    validationSchema,
  });

  const regionResponse = useMemoizedSelector(
    locationSelector.getRegionResponse
  );
  const provinceResponse = useMemoizedSelector(
    locationSelector.getProvinceResponse
  );
  const citiesResponse = useMemoizedSelector(
    locationSelector.getCitiesResponse
  );
  const barangayResponse = useMemoizedSelector(
    locationSelector.getBarangayResponse
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
      label: "Detailed Address",
      placeholder: "Set Detailed Address",
    },
  };

  const SubmitButtonProps: ButtonProps = {
    title: "Submit",
    containerStyle: newAddressStyle.btnSubmtContainer,
    textStyle: newAddressStyle.txtBtnSubmit,
  };

  function getRegionsProp(regions: RegionResponse): SelectionData[] {
    var regionsData: SelectionData[] = [];
    regions.map((data) => {
      regionsData.push({ id: data.id, value: data.name });
    });
    return regionsData;
  }

  function getProvinceProp(province: ProvinceResponse): SelectionData[] {
    var provinceData: SelectionData[] = [];
    province.map((data) => {
      provinceData.push({ id: data.id, value: data.name });
    });
    return provinceData;
  }

  function getCitiesProp(cities: CitiesResponse): SelectionData[] {
    var citiesData: SelectionData[] = [];
    cities.map((data) => {
      citiesData.push({ id: data.id, value: data.name });
    });
    return citiesData;
  }

  function getBarangayProp(barangay: BarangayResponse): SelectionData[] {
    var barangayData: SelectionData[] = [];
    barangay.map((data) => {
      barangayData.push({ id: data.id, value: data.name });
    });
    return barangayData;
  }
  return (
    <FormikContext.Provider value={formikBag}>
      <Screen {...headerProps}>
        <View style={{ marginTop: 10 }}>
          <AddressInput
            name="fullName"
            addressInput={{ label: "Full Name", placeholder: "Set Full Name" }}
          />
          <AddressInput
            name="phoneNumber"
            addressInput={{
              label: "Phone Number",
              placeholder: "Set Phone Number",
            }}
          />
          {regionResponse && (
            <AddressInputPicker
              name="region"
              label="Region"
              placeholder="Choose Region"
              data={getRegionsProp(regionResponse)}
            />
          )}
          {provinceResponse && (
            <AddressInputPicker
              name="province"
              label="Province"
              placeholder="Choose Province"
              data={getProvinceProp(provinceResponse)}
            />
          )}
          {citiesResponse && (
            <AddressInputPicker
              name="cities"
              label="City"
              placeholder="Choose City"
              data={getCitiesProp(citiesResponse)}
            />
          )}
          {barangayResponse && (
            <AddressInputPicker
              name="barangay"
              label="Barangay"
              placeholder="Choose Barangay"
              data={getBarangayProp(barangayResponse)}
            />
          )}
          <View
            style={[
              newAddressStyle.newContainer,
              { height: 95, paddingRight: 10, paddingBottom: 10 },
            ]}
          >
            <BaseText style={newAddressStyle.TextStyle}>
              Detailed Address
            </BaseText>
            <DetailedAddressInput
              name="detailedAddress"
              detailedInput={{
                label: "Detailed Address",
                placeholder: "Set Detailed Address",
              }}
            />
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
