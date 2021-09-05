import React from "react";
import { FlatList, ScrollView, TouchableOpacity, View } from "react-native";
import Image from "@app/atoms/Image";
import { Screen } from "@app/components/base-screen";
import { Props as ScreenProps } from "@app/components/base-screen/types";
import { DIMENS, theme } from "@app/styles";
import Text from "@app/atoms/Text";
import { ListItem, Overlay } from "react-native-elements";
import ListInputStyles from "@app/components/organisms/ListInput/styles";
import { FormikProvider, useFormik } from "formik";
import FormInput from "@app/components/molecules/FormInput";
import ValidationMessage from "@app/components/molecules/ValidationMessage";
import FormSwitch from "@app/components/molecules/FormSwitch";
import Button from "@app/atoms/Button";
import { AntDesign } from "@expo/vector-icons";
import Icon from "@app/atoms/Icon";
import ListInput from "@app/components/organisms/ListInput";
import FormImagePicker from "@app/components/molecules/FormImagePicker";
import { isEmpty } from "ramda";

const NotificationScreen: React.FC = () => {
  const screenProps: ScreenProps = {
    header: {
      title: "Notification",
    },
    customStyles: {
      backgroundColor: "green",
    },
  };

  const [variations, setVariations] = React.useState(data);

  const keyExtractor = React.useCallback((_, index) => index.toString(), []);

  const formikBag = useFormik({
    initialValues: { variations },
    enableReinitialize: true,
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: () => {},
  });

  console.log("variations: ", variations);
  alert(variations.length);

  const [visible, setVisible] = React.useState(false);
  const [isBtnVariationClicked, setIsBtnVariationClicked] =
    React.useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const addNewVariation = () => {
    setVariations((prev) => [
      ...prev,
      { variationName: "", hasImage: false, options: [] },
    ]);
    setIsBtnVariationClicked(true);
  };

  return (
    <Screen {...screenProps}>
      <FormikProvider value={formikBag}>
        {/** Variation Name */}
        <ScrollView>{/** Variation Item */}</ScrollView>
      </FormikProvider>
    </Screen>
  );
};

export default NotificationScreen;
