import React from "react";

import { Props as HeaderProps } from "../../atoms/base-screen/types";
import { Screen } from "../../atoms/base-screen";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { styleforaddress } from "./styleforaddress";
import { AddressProps } from "../../atoms/list/list-display/types";
import { AddressList } from "../../atoms/list/list-display";

const MyAddress: React.FC = () => {
  const { goBack } = useNavigation();
  const defautAddress: AddressProps = {
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
        <AddressList {...defautAddress} />
      </View>
    </Screen>
  );
};
export default MyAddress;
