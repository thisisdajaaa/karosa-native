/**
 *
 * AddressSearchTemplate
 * @format
 *
 */

import React, { FC, useRef, useState } from "react";

// import AddressSearchTemplateConfig from "./config";
import type { PropsType } from "./types";
import AddressSearchTemplateStyles from "./styles";
import { View } from "react-native";
import Header from "@app/components/molecules/Header";
import { theme } from "@app/styles";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { Marker } from "react-native-maps";
import Button from "@app/atoms/Button";
import routes from "@app/navigators/routes";

const AddressSearchTemplate: FC<PropsType> = (props) => {
  const { latitude, longitude } = props;
  const { goBack, navigate } = useNavigation();
  const mapRef = useRef();

  const [region, setRegion] = useState({
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [place, setPlace] = useState({
    latitude: latitude,
    longitude: longitude,
    details: "",
  });

  const GOOGLE_PLACES_API_KEY = "AIzaSyB2P8TWkc09Z83VZuYz_M_qh62r2s3c-p4";

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
              // console.log(data, details);
              setRegion({
                latitude: details?.geometry.location.lat || 0,
                longitude: details?.geometry.location.lng || 0,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              });
              // console.log(data);
              setPlace({
                latitude: details?.geometry.location.lat || 0,
                longitude: details?.geometry.location.lng || 0,
                details:
                  data.description.split(",")[0] +
                  "," +
                  data.description.split(",")[1] +
                  "," +
                  data.description.split(",")[2],
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
          style={AddressSearchTemplateStyles.map}
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
            titleStyle={{ fontSize: 16 }}
            onPress={() => {
              navigate("Stack", {
                screen: routes.ACCOUNTS_NEW_ADDRESS,
                params: {
                  latitude: place.latitude,
                  longitude: place.longitude,
                  details: place.details,
                },
              });
            }}></Button>
        </View>
      </View>
    </View>
  );
};

export default AddressSearchTemplate;
