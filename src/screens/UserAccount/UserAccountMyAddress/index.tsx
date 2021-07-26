import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { View, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { useMemoizedSelector } from "@app/hooks";
import { actions, selectors } from "@app/redux/auth";
import BaseScreen from "@app/atoms/BaseScreen";
import { Props as HeaderProps } from "@app/atoms/BaseScreen/types";
import { AddressList } from "@app/components/organisms/ListDisplay";
import Text from "@app/atoms/Text";
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
    <BaseScreen {...headerProps}>
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
        onPress={() => navigate(routes.ACCOUNTS_NEW_ADDRESS)}>
        <View style={styles.touchable}>
          <Text text="Add New Address" textStyle={styles.txtnewAdd} />
          <View style={styles.forIcon}>
            <MaterialIcons name="add" size={25} style={styles.materialColor} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </BaseScreen>
  );
};

export default MyAddressScreen;
