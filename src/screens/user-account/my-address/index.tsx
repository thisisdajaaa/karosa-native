import React from "react";

import { Props as HeaderProps } from "../../../components/base-screen/types";
import { Screen } from "../../../components/base-screen";
import { useNavigation } from "@react-navigation/native";
import {
  Button,
  Image,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { styleforaddress } from "./styleforaddress";
import { AddressProps } from "../../../components/list/list-display/types";
import { AddressList } from "../../../components/list/list-display";
import { BaseText } from "../../../components/base-text";
import { MaterialIcons } from "@expo/vector-icons";
import routes from "@app/navigators/routes";

const MyAddressScreen: React.FC = () => {
  const { goBack, navigate } = useNavigation();

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
      <TouchableWithoutFeedback
        onPress={() => navigate(routes.ACCOUNTS_NEW_ADDRESS)}
      >
        <View style={styleforaddress.touchable}>
          <BaseText style={styleforaddress.NewAddStyle}>
            Add New Address
          </BaseText>
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
      </TouchableWithoutFeedback>
    </Screen>
  );
};
export default MyAddressScreen;
