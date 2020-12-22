import React, { useState, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, CheckBox } from "react-native";
import { FormikContext, useFormik } from "formik";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Props as HeaderProps } from "@app/components/base-screen/types";
import { Screen } from "@app/components/base-screen";
import { useMemoizedSelector } from "@app/hooks";
import { Props as ButtonProps } from "@app/components/button/types";
import { actions } from "@app/redux/auth";
import { actions as regionActions } from "@app/redux/location";
import { actions as provinceActions } from "@app/redux/location";
import { actions as citiesActions } from "@app/redux/location";
import { actions as barangayActions } from "@app/redux/location";
import { selectors as locationSelector } from "@app/redux/location";
import { BaseText } from "@app/components/base-text";
import {
  AddressInput,
  AddressInputPicker,
  DetailedAddressInput,
} from "@app/components/formik/form-address";
import { ListInput } from "@app/components/list/list-input";
import { SelectionData } from "@app/components/formik/form-address/types";
import { SubmitButton } from "@app/components/formik/submit-button";
import { NewAddressRequest } from "@app/redux/auth/models";
import { ProvinceResponse } from "@app/redux/location/models";
import { RegionResponse } from "@app/redux/location/models";
import { CitiesResponse } from "@app/redux/location/models";
import { BarangayResponse } from "@app/redux/location/models";

import { styles } from "./styles";
import { validationSchema } from "./validation";

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

  const getProvinceResponse = useCallback(
    () => dispatch(provinceActions.callProvinceApi.request()),
    [dispatch]
  );

  const getCitiesResponse = useCallback(
    () => dispatch(citiesActions.callCitiesApi.request()),
    [dispatch]
  );

  const getBarangayResponse = useCallback(
    () => dispatch(barangayActions.callBarangayApi.request()),
    [dispatch]
  );

  useEffect(() => {
    getRegionResponse(),
      getProvinceResponse(),
      getCitiesResponse(),
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
        phoneNumber: values.phoneNumber,
        detailedAddress: values.region + values.province + values.barangay,
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

  const regionProp = (regionResponse: RegionResponse) => {
    const regionData: SelectionData[] = [];
    regionResponse.map((data) => {
      regionData.push({ id: data.id, value: data.name });
    });
    return regionData;
  };

  const barangayProp = (barangayResponse: BarangayResponse) => {
    const barangayData: SelectionData[] = [];
    barangayResponse.map((data) => {
      barangayData.push({ id: data.id, value: data.name });
    });
    return barangayData;
  };

  const citiesProp = (citiesResponse: CitiesResponse) => {
    const citiesData: SelectionData[] = [];
    citiesResponse.map((data) => {
      citiesData.push({ id: data.id, value: data.name });
    });
    return citiesData;
  };

  const provinceProp = (provinceResponse: ProvinceResponse) => {
    const provinceData: SelectionData[] = [];
    provinceResponse.map((data) => {
      provinceData.push({ id: data.id, value: data.name });
    });
    return provinceData;
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

  const SubmitButtonProps: ButtonProps = {
    title: "Submit",
    containerStyle: styles.btnSubmtContainer,
    textStyle: styles.txtBtnSubmit,
  };

  const listInput = (
    name: string,
    orientation: string,
    label: string,
    placeholder: string
  ): JSX.Element => {
    return (
      <ListInput
        isColumn={orientation === "column" ? true : false}
        isRow={orientation === "row" ? true : false}
        hasBottomDivider
        maxLength={name === "fullname" ? 100 : 1000}
        required={false}
        name={name}
        label={label}
        placeholder={placeholder}
      />
    );
  };

  const listIterator = (listItems: React.ReactElement[]) => {
    return listItems.map((item, key) => (
      <React.Fragment key={key}>{item}</React.Fragment>
    ));
  };

  const listDisplay = (): React.ReactElement[] => {
    const elements: React.ReactElement[] = [];

    const fullName = listInput("fullName", "row", "Full Name", "Set Full Name");
    const phoneNumber = listInput(
      "phoneNumber",
      "row",
      "Phone Number",
      "Set Phone Number"
    );
    const detailedAddress = listInput(
      "detailedAddress",
      "column",
      "Set Detailed Address",
      "Unit Number, House Number, Building, Street Name"
    );

    elements.push(fullName, phoneNumber, detailedAddress);

    return listIterator(elements);
  };

  return (
    <FormikContext.Provider value={formikBag}>
      <Screen {...headerProps}>
        <View style={styles.addressContainer}>
          <React.Fragment>{listDisplay()}</React.Fragment>
          {/* <AddressInput
            name="fullName"
            addressInput={{ label: "Full Name", placeholder: "Set Full Name" }}
          />
          <AddressInput
            name="phoneNumber"
            addressInput={{
              label: "Phone Number",
              placeholder: "Set Phone Number",
            }}
          /> */}
          {regionResponse && (
            <AddressInputPicker
              name="region"
              label="Region"
              placeholder="Choose Region"
              data={regionProp(regionResponse)}
            />
          )}
          {provinceResponse && (
            <AddressInputPicker
              name="province"
              label="Province"
              placeholder="Choose Province"
              data={provinceProp(provinceResponse)}
            />
          )}
          {citiesResponse && (
            <AddressInputPicker
              name="cities"
              label="City"
              placeholder="Choose City"
              data={citiesProp(citiesResponse)}
            />
          )}
          {barangayResponse && (
            <AddressInputPicker
              name="barangay"
              label="Barangay"
              placeholder="Choose Barangay"
              data={barangayProp(barangayResponse)}
            />
          )}
          {/* <View>
            <BaseText style={styles.textStyle}>Detailed Address</BaseText>
            <DetailedAddressInput
              name="detailedAddress"
              detailedInput={{
                label: "Unit Number, House Number \nBuilding, Street Name",
                placeholder: "Set Detailed Address",
              }}
            />
          </View> */}

          <View style={styles.checkboxContainer}>
            <BaseText>Set as default address</BaseText>
            <View>
              <CheckBox value={isSelected} onValueChange={setSelection} />
            </View>
          </View>

          <View style={styles.submitbuttonParent}>
            <SubmitButton {...SubmitButtonProps} />
          </View>

          <BaseText style={{ color: "red" }}>
            {formikBag.errors && Object.values(formikBag.errors)[0]}
          </BaseText>
        </View>
      </Screen>
    </FormikContext.Provider>
  );
};
export default NewAddressScreen;
