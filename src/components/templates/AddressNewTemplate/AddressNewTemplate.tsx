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
  const mapRef = useRef();

  const [region, setRegion] = useState({
    latitude: 10.265896257138982,
    longitude: 123.97143821531323,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const GOOGLE_PLACES_API_KEY = "AIzaSyB2P8TWkc09Z83VZuYz_M_qh62r2s3c-p4"; // never save your real api key in a snack!

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
        centerComponent={
          <GooglePlacesAutocomplete
            placeholder={"Search Address"}
            query={{
              key: GOOGLE_PLACES_API_KEY,
              language: "en",
              components: "country:ph",
              location: `${region.latitude}, ${region.longitude}`,
            }}
            fetchDetails={true}
            GooglePlacesSearchQuery={{ rankby: "distance" }}
            onPress={(data, details) => {
              console.log(data, details);
              setRegion({
                latitude: details?.geometry.location.lat || 0,
                longitude: details?.geometry.location.lng || 0,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              });
            }}
            styles={{
              textInput: {
                width: "100%",
                backgroundColor: theme.colors.light5,
              },
              container: {
                width: "100%",
                maxWidth: "100%",
                height: "100%",
              },
              listView: { backgroundColor: "white", width: "100%" },
            }}
          />
        }
      />

      <View>
        <MapView
          style={AddressNewTemplateStyles.map}
          region={region}
          zoomEnabled={true}
          showsUserLocation
          showsCompass>
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
            draggable={true}
          />
        </MapView>

        <View
          style={{
            position: "absolute", //use absolute position to show button on top of the map
            bottom: "1%",
            alignSelf: "center",
            width: "100%",
            padding: "5%",
          }}>
          <Button
            title={"Confirm"}
            buttonStyle={{ backgroundColor: theme.colors.primary }}
            titleStyle={{ fontSize: 16 }}></Button>
        </View>
      </View>
    </View>
  );
};
export default AddressNewTemplate;
