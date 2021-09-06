import React, { FC } from "react";
import { useFormikContext } from "formik";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import uuid from "react-native-uuid";
import { Overlay } from "react-native-elements";
import Input from "@app/atoms/Input";
import ImagePicker from "@app/molecules/ImagePicker";
import { VariationForm } from "@app/redux/shop/models";
import Text from "@app/atoms/Text";
import ListInputStyles from "@app/organisms/ListInput/styles";
import type { VariationModalProps } from "./types";
import { OptionNameStyles, VariationModalStyles } from "./styles";

const VariationModal: FC<VariationModalProps> = (props) => {
  const { index, setVisible, visible, toggleOverlay } = props;

  const { values, setValues } = useFormikContext<VariationForm>();

  const [imageUrl, setImageUrl] = React.useState<string | null>(null);
  const [optionName, setOptionName] = React.useState<string>("");

  const optionNameLength = optionName.length;
  const MAX_LENGTH = 20;

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
      optionName: optionName,
      image,
    });

    setValues({
      ...values.variationData,
      variationData: newArray,
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
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>

      {imageSwitchEnabled && (
        <View style={VariationModalStyles.imagePickerContainer}>
          <ImagePicker
            variation={4}
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
            text={`(${optionNameLength}/${MAX_LENGTH})`}
            textStyle={VariationModalStyles.txtLength}
          />
          <Text text="*" textStyle={VariationModalStyles.txtRequired} />
        </View>

        <Input
          placeholder="Enter Option Name"
          numberOfLines={1}
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
