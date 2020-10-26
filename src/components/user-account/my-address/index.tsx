import React from "react";

import { Props as HeaderProps } from "../../atoms/base-screen/types";
import { Screen } from "../../atoms/base-screen";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { styleforaddress } from "./styleforaddress";
import { AddressProps } from "../../atoms/list/list-display/types";
import { AddressList } from "../../atoms/list/list-display";
import { BaseText } from "../../atoms/base-text";
import { MaterialIcons } from "@expo/vector-icons";

const MyAddress: React.FC = () => {
  const { goBack } = useNavigation();
  const defaultAddress: AddressProps = {
    address: {
      name: "Bryan Alipar",
      default: true,
      address:
        "(+63) 998 345 6432 \n St. Michael Drive V. Rama \n Guadalupe, Cebu City \n Visayas, Cebu, 6000",
    },
    style: {
      textStyle: {},
    },
  };

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
        <AddressList {...defaultAddress} />
      </View>
      <View style={styleforaddress.touchable}>
        <BaseText style={styleforaddress.NewAddStyle}>Add New Address</BaseText>
        <View style={styleforaddress.forIcon}>
          <MaterialIcons
            name="add"
            size={25}
            style={{
              color: "#BDBDBD",
            }}
          />
        </View>
      </View>
    </Screen>
  );
};
export default MyAddress;
