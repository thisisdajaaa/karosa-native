/**
 *
 * AddressNewTemplate
 * @format
 *
 */

import React, { FC, useEffect, useState } from "react";

// import AddressNewTemplateConfig from "./config";
import type { PropsType } from "./types";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { Keyboard, View } from "react-native";
import Header from "@app/components/molecules/Header";
import SearchBar from "@app/components/molecules/SearchBar";

import * as Location from "expo-location";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import AddressNewTemplateStyles from "./styles";

const AddressNewTemplate: FC<PropsType> = (props) => {
  const {} = props;
  const { goBack, navigate } = useNavigation();

  // console.log();

  // const [location, setLocation] = useState<Location.LocationObject>({
  //   coords: {
  //     latitude: 0,
  //     longitude: 0,
  //     altitude: null,
  //     speed: null,
  //     altitudeAccuracy: null,
  //     heading: null,
  //     accuracy: null,
  //   },
  //   timestamp: 0,
  // });

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   getLocation();
  // });

  // const getLocation = async () => {
  //   let { status } = await Location.requestForegroundPermissionsAsync();
  //   if (status !== "granted") {
  //     // console.log("Permission to access location was denied");
  //     return;
  //   } else {
  //     // console.log("Permission to access location was granted");
  //     let userLocation = await Location.getCurrentPositionAsync();
  //     setLocation(userLocation);
  //   }
  // };

  // console.log(location.coords.latitude);

  const GOOGLE_PLACES_API_KEY = "AIzaSyB2P8TWkc09Z83VZuYz_M_qh62r2s3c-p4"; // never save your real api key in a snack!

  return (
    <View>
      {/* <Header
        // containerStyle={ProfileStyles.headerContainer}
        barStyle="light-content"
        leftComponent={{
          icon: "arrow-back",
          color: "green",
          onPress: goBack,
        }}
        centerComponent={
          <SearchBar
            placeholder={"Search in My Products"}
            backgroundColor={"primary"}
            // onTouchStart={(_e) => navigate(routes.HOME_SEARCH)}
            onFocus={Keyboard.dismiss}
          />
        }
      /> */}

      <View style={{ marginTop: 50, flex: 1 }}>
        <View>
          <GooglePlacesAutocomplete
            placeholder={"Search"}
            query={{
              key: GOOGLE_PLACES_API_KEY,
              language: "en",
              components: "country:ph",
            }}
            fetchDetails={true}
            GooglePlacesSearchQuery={{ rankby: "distance" }}
            styles={{
              container: {
                flex: 0,
                position: "absolute",
                width: "100%",
                zIndex: 1,
              },
              listView: { backgroundColor: "white" },
            }}
          />
        </View>
        <MapView
          style={AddressNewTemplateStyles.map}
          showsUserLocation
          showsMyLocationButton></MapView>
      </View>
    </View>
  );
};
export default AddressNewTemplate;
