/**
 *
 * AddressNewTemplate
 * @format
 *
 */

import React, { FC, useEffect, useRef, useState } from "react";

// import AddressNewTemplateConfig from "./config";
import type { PropsType } from "./types";
import MapView, { Callout, CalloutSubview, Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { Animated, Keyboard, TouchableOpacity, View } from "react-native";
import Header from "@app/components/molecules/Header";
import SearchBar from "@app/components/molecules/SearchBar";

import * as Location from "expo-location";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import AddressNewTemplateStyles from "./styles";
import { theme } from "@app/styles";
import Text from "@app/atoms/Text";
import Button from "@app/atoms/Button";
import Icon from "@app/atoms/Icon";

const AddressNewTemplate: FC<PropsType> = (props) => {
  const {} = props;
  const { goBack, navigate } = useNavigation();

  return (
    <View style={{ backgroundColor: theme.colors.white }}>
      <Header
        barStyle="light-content"
        placement={"left"}
        leftComponent={{
          icon: "arrow-back",
          color: "green",
          onPress: goBack,
          style: {
            paddingTop: 5,
          },
        }}
        containerStyle={{
          width: "100%",
          maxWidth: "100%",
          zIndex: 1,
          position: "absolute",
        }}
        centerComponent={<Text text={"New Address"}></Text>}
      />
    </View>
  );
};
export default AddressNewTemplate;
