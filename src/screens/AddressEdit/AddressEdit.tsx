/**
 *
 * AddressEdit
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { FormikContext, useFormik } from "formik";
import uuid from "react-native-uuid";
import AddressEditTemplate from "@app/templates/AddressEdit";
import { AddressMainParams } from "@app/screens/AddressSearch/types";
import { useMemoizedSelector, useMount } from "@app/hooks";
import { actions, selectors } from "@app/redux/address";
import { NewAddressForm } from "@app/redux/address/models";
import routes from "@app/navigators/routes";

import validationSchema from "./validation";

const AddressEdit: FC = () => {
  const { goBack, navigate } = useNavigation();
  const dispatch = useDispatch();

  const setUserAddressList = useCallback(
    (values: NewAddressForm[]) => dispatch(actions.setUserAddressList(values)),
    [dispatch]
  );

  const { params } =
    useRoute<RouteProp<AddressMainParams, "AddressLocation">>();

  const newAddressForm = useMemoizedSelector(selectors.getNewAddressForm);
  const getUserAddressList = useMemoizedSelector(selectors.getUserAddressList);

  const onEditAddress = () => {
    if (!params.id) goBack();

    navigate("Stack", {
      screen: routes.ACCOUNTS_SEARCH_ADDRESS,
      id: params.id,
      latitude: params.latitude,
      longitude: params.longitude,
      location: params.location,
    });
  };

  const getInitialValues = (): NewAddressForm => {
    const foundAddress = getUserAddressList.find(
      (value) => value.id === params.id
    );

    if (!foundAddress) return { ...newAddressForm };

    return {
      ...foundAddress,
    };
  };

  useMount(() => {
    const hasLatLng = params.latitude && params.longitude && params.location;

    hasLatLng
      ? formikBag.setFieldValue("hasLatLng", true)
      : formikBag.setFieldValue("hasLatLng", false);
  });

  const onUpdateAddress = (values: NewAddressForm) => {
    const updatedAddress = getUserAddressList.map((value) => {
      if (value.id === params.id) {
        return {
          ...values,
          coords: {
            latitude: params.latitude,
            longitude: params.longitude,
            location: params.location,
          },
        };
      }

      return {
        ...value,
        isDefault: values.isDefault && false,
      };
    });

    setUserAddressList(updatedAddress);
  };

  const onAddAddress = (values: NewAddressForm) => {
    const newAddress: NewAddressForm = {
      ...values,
      id: uuid.v4(),
      coords: {
        latitude: params.latitude,
        longitude: params.longitude,
        location: params.location,
      },
    };

    let clonedAddressList: NewAddressForm[] = [...getUserAddressList];

    if (values.isDefault) {
      clonedAddressList = [...getUserAddressList].map((value) => {
        return {
          ...value,
          isDefault: false,
        };
      });
    }

    const addressList: NewAddressForm[] = [...clonedAddressList, newAddress];

    setUserAddressList(addressList);
  };

  const handleSubmit = (values: NewAddressForm) => {
    params.id ? onUpdateAddress(values) : onAddAddress(values);

    navigate(routes.ACCOUNTS_ADDRESS);
  };

  const formikBag = useFormik({
    initialValues: getInitialValues(),
    onSubmit: handleSubmit,
    validateOnBlur: false,
    validateOnChange: true,
    validationSchema,
  });

  return (
    <FormikContext.Provider value={formikBag}>
      <AddressEditTemplate
        routeParams={params}
        handleEditAddress={onEditAddress}
        handleBack={goBack}
      />
    </FormikContext.Provider>
  );
};

export default AddressEdit;
