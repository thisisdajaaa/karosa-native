import React from "react";
import { Header } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { SearchBar } from "@app/components/search-bar";
import { TouchableOpacity, Keyboard } from "react-native";
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
        centerComponent={
          <SearchBar
            placeholder={"Search in My Products"}
            backgroundColor={"secondary"}
            onTouchStart={(_e) => navigate(routes.SEARCH_PRODUCT)}
            onFocus={Keyboard.dismiss}
          />
        }
        rightComponent={
          <TouchableOpacity onPress={() => console.log("messages")}>
            <MaterialIcons name="chat" size={24} color={theme.colors.primary} />
          </TouchableOpacity>
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
