import React from "react";

import { Props as HeaderProps } from "../../atoms/base-screen/types";
import { Screen } from "../../atoms/base-screen";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { styleforaddress } from "./styleforaddress";
import { color } from "@shopify/restyle";
import { MaterialIcons } from "@expo/vector-icons";

const MyAddress: React.FC = () => {
  const { goBack } = useNavigation();

  const headerProps: HeaderProps = {
    header: {
      iconName: "arrow-back",
      title: "My Addresses",
      press: {
        left: () => goBack(),
      },
    },
  };
  return (
    <Screen {...headerProps}>
      <View style={styleforaddress.adressContainer}>
        <Text style={styleforaddress.Default}>Default</Text>
        <Text style={styleforaddress.NameStyle}>Bryan Alipar {"\n"}</Text>
        <Text style={styleforaddress.DetailText}>
          (+63) 998 345 6432 {"\n"}
          St. Michael Drive V. Rama {"\n"}
          Guadalupe, Cebu City {"\n"}
          Visayas, Cebu, 6000 {"\n"}
        </Text>
      </View>
      <View style={styleforaddress.touchable}>
        <Text style={styleforaddress.NewAddStyle}>Add New Address</Text>
        <MaterialIcons name={"add"} size={24} color="#0AA351" />
      </View>
    </Screen>
  );
};
export default MyAddress;
