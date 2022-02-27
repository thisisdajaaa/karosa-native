/**
 *
 * AddressMain
 * @format
 *
 */

import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Alert } from "react-native";
import { isEmpty } from "lodash";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import { actions, selectors } from "@app/redux/address";
import { NewAddressForm, UserCoordinates } from "@app/redux/address/models";
import { useMemoizedSelector, useMount, useToast } from "@app/hooks";
import AddressMainTemplate from "@app/templates/AddressMain";
import routes from "@app/navigators/routes";

const AddressMain: FC = () => {
  const dispatch = useDispatch();

  const { goBack, navigate } = useNavigation();
  const { showToast, clearToastQueue } = useToast();

  const addressMainActions = {
    setUserCoordinates: useCallback(
      (values: UserCoordinates) => dispatch(actions.setUserCoordinates(values)),
      [dispatch]
    ),
    setDeletedAddress: useCallback(
      (id: string | number[] | undefined) =>
        dispatch(actions.setDeletedAddress(id)),
      [dispatch]
    ),
  };

  const userCoordinates = useMemoizedSelector(selectors.getUserCoordinates);
  const addressList = useMemoizedSelector(selectors.getUserAddressList);

  const handleEditAddress = (address: NewAddressForm) => {
    navigate("Stack", {
      screen: routes.ACCOUNTS_EDIT_ADDRESS,
      params: {
        id: address.id,
        latitude: address.coords.latitude,
        longitude: address.coords.longitude,
        location: address.coords.location,
      },
    });
  };

  const handleNewAddress = () => {
    navigate("Stack", {
      screen: routes.ACCOUNTS_SEARCH_ADDRESS,
      params: {
        latitude: userCoordinates.latitude,
        longitude: userCoordinates.longitude,
      },
    });
  };

  const handleLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    clearToastQueue();

    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use location service.",
        [{ text: "OK" }],
        { cancelable: false }
      );
    }

    try {
      const { coords } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
      });

      const { longitude, latitude } = coords;

      if (!isEmpty(coords)) {
        addressMainActions.setUserCoordinates({
          latitude,
          longitude,
        });
      }
    } catch (error) {
      showToast({
        message: String(error),
        autoHideDuration: 3000,
        type: "error",
      });
    }
  };

  useMount(handleLocation);

  return (
    <AddressMainTemplate
      addressList={addressList}
      handleBack={goBack}
      handleEditAddress={handleEditAddress}
      handleNewAddress={handleNewAddress}
      handleDelete={addressMainActions.setDeletedAddress}
    />
  );
};

export default AddressMain;
