import React from "react";
import { Header } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";
import { theme } from "@app/styles";
import { Screen } from "@app/components/base-screen";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { ProductTabs } from "@app/navigators/tab-navigator";
import routes from "@app/navigators/routes";

import { styles } from "./styles";

const MyProductsScreen: React.FC = () => {
  const { goBack, navigate } = useNavigation();

  const screenProps: ScreenProps = {
    customHeader: (
      <Header
        containerStyle={{ backgroundColor: "transparent" }}
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: goBack,
        }}
        centerComponent={{
          text: "My Products",
          style: {
            ...theme.textRegular,
            fontWeight: "700",
            alignSelf: "center",
          },
        }}
        rightComponent={
          <View style={styles.flexRow}>
            <TouchableOpacity
              style={styles.searchHeader}
              onPress={() => navigate(routes.SEARCH_PRODUCT)}
            >
              <MaterialIcons
                name="search"
                size={24}
                color={theme.colors.primary}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log("messages")}>
              <MaterialIcons
                name="chat"
                size={24}
                color={theme.colors.primary}
              />
            </TouchableOpacity>
          </View>
        }
      />
    ),
    customStyles: styles.container,
  };

  return (
    <Screen {...screenProps}>
      <ProductTabs />
    </Screen>
  );
};

export default MyProductsScreen;
