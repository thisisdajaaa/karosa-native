import React, { FC } from "react";
import { useFormikContext } from "formik";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import uuid from "react-native-uuid";
import { Overlay } from "react-native-elements";
import { VariationForm, VariationItem } from "@app/redux/shop/models";
import Input from "@app/atoms/Input";
import ImagePicker from "@app/molecules/ImagePicker";
import Text from "@app/atoms/Text";
import ListInputStyles from "@app/organisms/ListInput/styles";
import { COMMON } from "@app/constants";

import type { VariationModalProps } from "./types";
import { OptionNameStyles, VariationModalStyles } from "./styles";
import { ICON_SIZE, NUM_LINE, TOTAL } from "./config";

const VariationModal: FC<VariationModalProps> = (props) => {
  const { index, setVisible, visible, toggleOverlay } = props;

  const { values, setValues } = useFormikContext<VariationForm>();

  const [imageUrl, setImageUrl] = React.useState<string | null>(null);
  const [optionName, setOptionName] = React.useState<string>("");

  const optionNameLength = optionName.length;

  const imageSwitchEnabled = values.variationData[index].hasImage;
  const hasNoImage = imageSwitchEnabled && !imageUrl;

  const handleImageChange = (image: string) => {
    setImageUrl(image);
  };

  const handleOptionNameChange = (text: string) => {
    setOptionName(text);
  };

  const setClonedVariationItem = (image: string | null) => {
    const newArray = [...values.variationData];

    newArray[index].options.push({
      id: uuid.v4(),
      optionName,
      image,
      price: "",
      stock: "",
      weight: "",
    });

    const newVariationData: VariationItem[] = [...newArray];

    setValues({
      ...values,
      variationData: newVariationData,
    });
  };

  const handleSubmit = () => {
    if (hasNoImage) return;

    if (imageSwitchEnabled) {
      setClonedVariationItem(imageUrl);
    } else {
      setClonedVariationItem(null);
    }

    setVisible(false);
    setImageUrl(null);
    setOptionName("");
  };

  const { optionName: optionNameContainer } =
    OptionNameStyles(imageSwitchEnabled);

  return (
    <Overlay
      isVisible={visible}
      overlayStyle={VariationModalStyles.overlayContainer}
      onBackdropPress={toggleOverlay}>
      <TouchableOpacity
        style={VariationModalStyles.iconContainer}
        onPress={() => setVisible(false)}>
        <AntDesign name="close" size={ICON_SIZE.CLOSE} color="black" />
      </TouchableOpacity>

      {imageSwitchEnabled && (
        <View style={VariationModalStyles.imagePickerContainer}>
          <ImagePicker
            variation={COMMON.VARIATION.FOUR}
            uri={imageUrl}
            onChange={handleImageChange}
          />
        </View>
      )}

      <View style={optionNameContainer}>
        <View style={VariationModalStyles.rowContainer}>
          <Text
            text="Option Name"
            textStyle={VariationModalStyles.txtOptionName}
          />

          <Text
            text={`(${optionNameLength}/${TOTAL})`}
            textStyle={VariationModalStyles.txtLength}
          />
          <Text text="*" textStyle={VariationModalStyles.txtRequired} />
        </View>

        <Input
          placeholder="Enter Option Name"
          numberOfLines={NUM_LINE}
          multiline={false}
          disabled={hasNoImage}
          inputStyle={ListInputStyles.txtValue}
          inputContainerStyle={ListInputStyles.columnInputContainer}
          value={optionName}
          onChange={handleOptionNameChange}
          onEndEditing={handleSubmit}
        />
      </View>
    </Overlay>
  );
};

export default VariationModal;
