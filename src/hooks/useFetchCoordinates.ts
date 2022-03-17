import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Alert } from "react-native";
import { isEmpty } from "lodash";
import * as Location from "expo-location";
import { actions } from "@app/redux/address";
import { UserCoordinates } from "@app/redux/address/models";

import useMount from "./useMount";
import useToast from "./useToast";

const useFetchCoordinates = () => {
  const { showToast, clearToastQueue } = useToast();

  const dispatch = useDispatch();

  const setUserCoordinates = useCallback(
    (values: UserCoordinates) => dispatch(actions.setUserCoordinates(values)),
    [dispatch]
  );

  const handleLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    clearToastQueue();

    if (status !== "granted")
      Alert.alert(
        "Permission not granted",
        "Allow the app to use location service.",
        [{ text: "OK" }],
        { cancelable: false }
      );

    try {
      const { coords } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
      });

      const { longitude, latitude } = coords;

      if (!isEmpty(coords)) {
        setUserCoordinates({
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
};

export default useFetchCoordinates;
