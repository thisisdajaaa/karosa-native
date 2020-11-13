import React, { useCallback } from "react";
import { useMemoizedSelector } from "@app/hooks";
import { actions, selectors } from "@app/redux/auth";
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
import { useDispatch } from "react-redux";
import { date } from "yup";

const MyAddressScreen: React.FC = () => {
  const { goBack, navigate } = useNavigation();
  const dispatch = useDispatch();

  const getAddress = useCallback(
    () => dispatch(actions.callMyAddressApi.request()),
    [dispatch]
  );

  const addressResponse = useMemoizedSelector(selectors.getMyAddressResponse);
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
        {addressResponse &&
          addressResponse.map((value, index) => (
            <AddressList
              key={index}
              address={{
                name: value.name,
                address: value.address_line_1 + "\n" + value.postalCode,
                default: value.type === "home",
              }}
            />
          ))}
      </View>
      <TouchableWithoutFeedback
        onPress={() =>
          // navigate(routes.ACCOUNTS_NEW_ADDRESS)
          {
            getAddress();
            console.log(addressResponse);
            console.log("addressResponse");
          }
        }
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
