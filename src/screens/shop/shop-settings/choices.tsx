import React, { useRef } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MultiList } from "@app/components/multi-list";
import { Props as MultiListProps } from "@app/components/multi-list/types";
import { theme } from "@app/styles";
import routes from "@app/navigators/routes";
import RBSheet from "react-native-raw-bottom-sheet";
import { useMemoizedSelector } from "@app/hooks";
import selectors from "@app/redux/shop/selectors";

import DeleteShopModal from "../delete-shop";

import { styles } from "./styles";

const Choices = () => {
  const { navigate } = useNavigation();
  const deleteShopRef = useRef<RBSheet>(null);

  const shopResponse = useMemoizedSelector(selectors.getShopResponse);

  const multiListProps: MultiListProps = {
    multiChev: [
      {
        title: "Shop Name",
        rightLabel: shopResponse.response.shop.name,
        listColor: theme.colors.orange,
        hasSeparator: true,
        onPress: () =>
          navigate("Main Stack", { screen: routes.DUMMY_PRODUCTS }),
      },
      {
        title: "Shop Status",
        rightLabel: shopResponse.response.shop.isActive.toString(),
        listColor: theme.colors.green5,
        hasSeparator: true,
        onPress: () =>
          navigate("Main Stack", { screen: routes.DUMMY_MARKETING }),
      },
      {
        title: "Shop Address",
        rightLabel: shopResponse.response.email,
        listColor: theme.colors.gold,
        hasSeparator: true,
        onPress: () => navigate("Main Stack", { screen: routes.DUMMY_FINANCE }),
      },
      {
        title: "Payment Option",
        listColor: theme.colors.red5,
        onPress: () => navigate("Main Stack", { screen: routes.DUMMY_REPORTS }),
      },
      {
        title: "Delete Shop",
        listColor: theme.colors.red5,
        onPress: () => deleteShopRef.current?.open(),
      },
    ],
  };

  return (
    <View style={styles.choicesContainer}>
      <MultiList {...multiListProps} />
      <DeleteShopModal sheetRef={deleteShopRef} />
    </View>
  );
};

export default Choices;
 