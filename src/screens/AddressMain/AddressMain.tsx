/**
 *
 * AddressMain
 * @format
 *
 */

import AddressMainTemplate from "@app/templates/AddressMain";
import { actions } from "@app/redux/address";
import { UserCoordinates } from "@app/redux/address/models";

import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import * as Location from "expo-location";
import { useMount, useToast } from "@app/hooks";
import { Alert } from "react-native";
import { isEmpty } from "lodash";

const AddressMain: FC = () => {
  const dispatch = useDispatch();

  const { showToast, clearToastQueue } = useToast();

  const action = {
    setUserCoordinates: useCallback(
      (values: UserCoordinates) => dispatch(actions.setUserCoordinates(values)),
      [dispatch]
    ),
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
        const response = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });

        const { city, country } = response[0];

        action.setUserCoordinates({
          latitude,
          longitude,
          location: `${city}, ${country}`,
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

  return <AddressMainTemplate />;
};

export default AddressMain;
