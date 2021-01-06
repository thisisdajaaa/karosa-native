import React, { useCallback, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { FormikContext, useFormik } from "formik";
import { useDispatch } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import { Props as HeaderProps } from "@app/components/base-screen/types";
import { Screen } from "@app/components/base-screen";
import { useMemoizedSelector } from "@app/hooks";
import { Props as ButtonProps } from "@app/components/button/types";
import { actions } from "@app/redux/auth";
import {
  actions as regionActions,
  actions as provinceActions,
  actions as citiesActions,
  actions as barangayActions,
  selectors as locationSelector,
} from "@app/redux/location";
import { ListInput } from "@app/components/list/list-input";
import { SubmitButton } from "@app/components/formik/submit-button";
import { NewAddressRequest } from "@app/redux/auth/models";
import { ListPicker } from "@app/components/list/list-picker";
import { PickerData } from "@app/redux/api-models/common";
import {
  ProvinceRequest,
  CitiesRequest,
  BarangayRequest,
} from "@app/redux/location/models";

import { styles } from "./styles";
import { validationSchema } from "./validation";

const EditAddressScreen: React.FC = () => {
  const { goBack } = useNavigation();
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
    (request: ProvinceRequest) =>
      dispatch(provinceActions.callProvinceApi.request(request)),
    [dispatch]
  );

  const getCitiesResponse = useCallback(
    (request: CitiesRequest) =>
      dispatch(citiesActions.callCitiesApi.request(request)),
    [dispatch]
  );

  const getBarangayResponse = useCallback(
    (request: BarangayRequest) =>
      dispatch(barangayActions.callBarangayApi.request(request)),
    [dispatch]
  );

  useEffect(() => {
    getRegionResponse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formikBag = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      region: { id: 0, value: "" } as PickerData,
      cities: { id: 0, value: "" } as PickerData,
      province: { id: 0, value: "" } as PickerData,
      barangay: { id: 0, value: "" } as PickerData,
      detailedAddress: "",
    },

    onSubmit: (values) => {
      const request: NewAddressRequest = {
        name: values.fullName,
        phoneNo: values.phoneNumber,
        // eslint-disable-next-line camelcase
        detailed_address: values.detailedAddress,
        isDefaultAddress: true,
        barangayId: values.barangay.id,
      };
      callNewAddressApi(request);
    },
    validationSchema,
  });

  useEffect(() => {
    const request: ProvinceRequest = {
      regionId: formikBag.values.region.id,
    };
    getProvinceResponse(request);
    formikBag.values.province = { id: 0, value: "" } as PickerData;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formikBag.values.region]);

  useEffect(() => {
    const request: CitiesRequest = {
      provinceId: formikBag.values.province.id,
    };
    getCitiesResponse(request);
    formikBag.values.cities = { id: 0, value: "" } as PickerData;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formikBag.values.province]);

  useEffect(() => {
    const request: BarangayRequest = {
      cityId: formikBag.values.cities.id,
    };
    getBarangayResponse(request);
    formikBag.values.barangay = { id: 0, value: "" } as PickerData;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formikBag.values.cities]);

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

  const regionProp = () => {
    const regionData: PickerData[] = [];
    regionResponse.map((data) => {
      regionData.push({ id: data.id, value: data.name });
    });
    return regionData;
  };

  const barangayProp = () => {
    const barangayData: PickerData[] = [];
    barangayResponse.map((data) => {
      barangayData.push({ id: data.id, value: data.name });
    });
    return barangayData;
  };

  const citiesProp = () => {
    const citiesData: PickerData[] = [];
    citiesResponse.map((data) => {
      citiesData.push({ id: data.id, value: data.name });
    });
    return citiesData;
  };

  const provinceProp = () => {
    const provinceData: PickerData[] = [];
    provinceResponse.map((data) => {
      provinceData.push({ id: data.id, value: data.name });
    });
    return provinceData;
  };

  const headerProps: HeaderProps = {
    header: {
      iconName: "arrow-back",
      title: "Edit Address",
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
  ) => {
    return (
      <ListInput
        isColumn={orientation === "column" ? true : false}
        isRow={orientation === "row" ? true : false}
        hasBottomDivider
        required={false}
        name={name}
        label={label}
        placeholder={placeholder}
      />
    );
  };

  const listInputPicker = (
    name: string,
    label: string,
    placeholder: string,
    data: PickerData[]
  ): JSX.Element => {
    return (
      <>
        {data && (
          <ListPicker
            name={name}
            label={label}
            placeholder={placeholder}
            data={data}
          />
        )}
      </>
    );
  };

  const listIterator = (listItems: React.ReactElement[]) => {
    return listItems.map((item, key) => (
      <React.Fragment key={key}>{item}</React.Fragment>
    ));
  };

  const listDisplay = () => {
    const elements: React.ReactElement[] = [];

    const fullName = listInput("fullName", "row", "Full Name", "Set Full Name");
    const phoneNumber = listInput(
      "phoneNumber",
      "row",
      "Phone Number",
      "Set Phone Number"
    );

    const region = listInputPicker(
      "region",
      "Region",
      "Choose Region",
      regionProp()
    );

    const province = listInputPicker(
      "province",
      "Province",
      "Choose Province",
      provinceProp()
    );

    const cities = listInputPicker(
      "cities",
      "City",
      "Choose City",
      citiesProp()
    );

    const barangay = listInputPicker(
      "barangay",
      "Barangay",
      "Choose Barangay",
      barangayProp()
    );

    const detailedAddress = listInput(
      "detailedAddress",
      "column",
      "Set Detailed Address",
      "Unit Number, House Number, Building, Street Name"
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

  return (
    <FormikContext.Provider value={formikBag}>
      <Screen {...headerProps}>
        <View style={styles.addressContainer}>
          <ScrollView>
            <React.Fragment>{listDisplay()}</React.Fragment>
            <View style={styles.submitbuttonParent}>
              <SubmitButton {...SubmitButtonProps} />
            </View>
          </ScrollView>
        </View>
      </Screen>
    </FormikContext.Provider>
  );
};
export default EditAddressScreen;