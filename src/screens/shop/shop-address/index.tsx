import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useMemoizedSelector } from "@app/hooks";
import { actions, selectors } from "@app/redux/auth";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { Screen } from "@app/components/base-screen";
import { AddressList } from "@app/components/list/list-display";
import routes from "@app/navigators/routes";

import { styles } from "./styles";

const ShopAddressScreen: React.FC = () => {
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

  const screenProps: ScreenProps = {
    header: {
      iconName: "arrow-back",
      title: "Shop Address",
      customStyles: {
        right: styles.txtSave,
      },
      press: {
        left: () => goBack(),
        right: () => console.log("edit profile"),
      },
      text: {
        right: "Edit",
      },
    },
    customStyles: styles.container,
  };

  return (
    <Screen {...screenProps}>
      <View style={styles.addressContainer}>
        {addressResponse &&
          addressResponse.map((value, index) => (
            <AddressList
              key={index}
              address={{
                name: "Xchan skowsky",
                phoneNumber: "21321312",
                barangayId: 303019,
                detailedAddress: "sadsadqwcqwc",
                default: true,
              }}
            />
          ))}
      </View>
    </Screen>
  );
};

export default ShopAddressScreen;
