import React, { useState } from "react";
import { Header, ListItem } from "react-native-elements";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { theme } from "@app/styles";
import { Screen } from "@app/components/base-screen";
import { ImagePicker } from "@app/components/image-picker";
import { ListInput } from "@app/components/list/list-input";
import { AppButton } from "@app/components/button";
import { Props as ButtonProps } from "@app/components/button/types";
import { Props as ScreenProps } from "@app/components/base-screen/types";

import { styles } from "./styles";

const AddVariationScreen: React.FC = () => {
  const { goBack } = useNavigation();
  const [image, setImage] = useState<string | null>(null);

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
          text: "Add Variation",
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
        <ImagePicker
          imageUri={image}
          onChangeImage={(img: string) => setImage(img)}
        />
      </ListItem>
      <ListItem bottomDivider>
        <ListInput
          isColumn
          required
          label={"Product Name"}
          placeholder={"Enter Product Name"}
        />
      </ListItem>
      <ListItem bottomDivider>
        <ListInput
          isRow
          required
          label={"Price"}
          placeholder={"Set price per product"}
        />
      </ListItem>
      <ListItem bottomDivider>
        <ListInput
          isRow
          required
          label={"Weight per product"}
          placeholder={"Set Weight"}
        />
      </ListItem>
      <ListItem bottomDivider>
        <ListInput isRow required label={"Stocks"} placeholder={"Set stocks"} />
      </ListItem>

      <View style={styles.buttonContainer}>
        <AppButton {...saveButtonProps} />
      </View>
    </Screen>
  );
};

export default AddVariationScreen;
