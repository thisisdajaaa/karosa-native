/**
 *
 * AddressMainTemplate
 * @format
 *
 */

import React, { FC, useEffect, useState } from "react";

import type { PropsType } from "./types";
import { Button, View } from "react-native";
import Header from "@app/components/molecules/Header";
import Text from "@app/atoms/Text";
import Icon from "@app/atoms/Icon";
import { useNavigation } from "@react-navigation/core";
import routes from "@app/navigators/routes";
import * as Location from "expo-location";

const AddressMainTemplate: FC<PropsType> = (props) => {
  const {} = props;
  const { goBack, navigate } = useNavigation();
  const [userLocation, setUserLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    handlelocation();
  });

  const handlelocation = () => {
    Location.installWebGeolocationPolyfill();
    navigator.geolocation.getCurrentPosition((pos) => {
      setUserLocation({
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude,
      });
    });
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        barStyle="light-content"
        leftComponent={{
          icon: "arrow-back",
          color: "green",
          onPress: goBack,
        }}
        centerComponent={<Text text={"Address"} />}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
        }}>
        <Icon
          group={"accountSettings"}
          name={"illustration_address"}
          width={150}
          height={150}
        />
        <Text text={"No added address yet"} textStyle={{ marginTop: 20 }} />
      </View>

      <Button
        title="Add New Address"
        onPress={() => {
          navigate("Stack", {
            screen: routes.ACCOUNTS_SEARCH_ADDRESS,
            params: {
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            },
          });
        }}></Button>
    </View>
  );
};

export default AddressMainTemplate;
