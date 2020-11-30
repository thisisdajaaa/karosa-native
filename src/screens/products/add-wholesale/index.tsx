import React from "react";
import { Header, ListItem } from "react-native-elements";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { theme } from "@app/styles";
import { Screen } from "@app/components/base-screen";
import { ListInput } from "@app/components/list/list-input";
import { AppButton } from "@app/components/button";
import { Props as ButtonProps } from "@app/components/button/types";
import { Props as ScreenProps } from "@app/components/base-screen/types";

import { styles } from "./styles";

const AddWholesaleScreen: React.FC = () => {
  const { goBack } = useNavigation();

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
          text: "Add Wholesale",
          style: {
            ...theme.textRegular,
            fontWeight: "700",
            alignSelf: "center",
          },
        }}
      />
    ),
    customStyles: styles.container,
  };

  const saveButtonProps: ButtonProps = {
    onPress: () => goBack(),
    title: "Save",
    containerStyle: styles.saveButtonContainer,
    textStyle: styles.txtSave,
  };

  return (
    <Screen {...screenProps}>
      <ListItem bottomDivider>
        <ListInput isRow label={"Minimum Order"} placeholder={"Set"} />
      </ListItem>
      <ListItem bottomDivider>
        <ListInput isRow label={"Maximum Order"} placeholder={"Set"} />
      </ListItem>
      <ListItem bottomDivider>
        <ListInput
          isRow
          required
          label={"Unit Price"}
          placeholder={"Set Price/Grams"}
        />
      </ListItem>

      <View style={styles.buttonContainer}>
        <AppButton {...saveButtonProps} />
      </View>
    </Screen>
  );
};

export default AddWholesaleScreen;
