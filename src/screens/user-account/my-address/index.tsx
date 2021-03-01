import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { View, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useMemoizedSelector } from "@app/hooks";
import { actions, selectors } from "@app/redux/auth";
import { Props as HeaderProps } from "@app/components/base-screen/types";
import { Screen } from "@app/components/base-screen";
import { AddressList } from "@app/components/list/list-display";
import { BaseText } from "@app/components/base-text";
import routes from "@app/navigators/routes";

import { styles } from "./styles";


const MyAddressScreen: React.FC = () => {
  const { goBack, navigate } = useNavigation();
  const dispatch = useDispatch();

  const getAddress = useCallback(
    () => dispatch(actions.callMyAddressApi.request()),
    [dispatch]
  );

  useEffect(() => {
    getAddress();
  }, []);

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
      <View style={styles.addressContainer}>
        {addressResponse &&
          addressResponse.map((value, index) => (
            <AddressList
              key={index}
              address={{
                name: value.name,
                phoneNumber: value.phoneNumber,
                barangayId: value.barangayId,
                detailedAddress: value.detailedAddress,
                default: value.isDefaultAddress,
              }}
            />
          ))}
      </View>
      <TouchableWithoutFeedback
        onPress={() => navigate(routes.ACCOUNTS_NEW_ADDRESS)}
      >
        <View style={styles.touchable}>
          <BaseText style={styles.txtnewAdd}>Add New Address</BaseText>
          <View style={styles.forIcon}>
            <MaterialIcons name="add" size={25} style={styles.materialColor} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Screen>
  );
};

export default MyAddressScreen;
