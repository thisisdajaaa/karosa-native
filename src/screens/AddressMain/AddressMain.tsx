/**
 *
 * AddressMain
 * @format
 *
 */

import AddressMainTemplate from "@app/templates/AddressMain";
import { actions } from "@app/redux/address";
import { UserLocation } from "@app/redux/address/models";

import React, { FC, useCallback } from "react";
import { useDispatch } from "react-redux";
import * as Location from "expo-location";
import { useMount } from "@app/hooks";
import { Alert } from "react-native";

const AddressMain: FC = () => {
  const dispatch = useDispatch();

  const action = {
    setUserLocation: useCallback(
      (values: UserLocation) => dispatch(actions.setUserLocation(values)),
      [dispatch]
    ),
  };

  const handleLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") return;

    Location.installWebGeolocationPolyfill();

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        action.setUserLocation({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      },
      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  useMount(handleLocation);

  return <AddressMainTemplate />;
};

export default AddressMain;
