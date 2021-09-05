import Input from "@app/atoms/Input";
import ImagePicker from "@app/components/molecules/ImagePicker";
import { VariationForm } from "@app/redux/shop/models";
import { DIMENS, theme } from "@app/styles";
import { AntDesign } from "@expo/vector-icons";
import { useFormikContext } from "formik";
import React, { Dispatch, FC, SetStateAction } from "react";
import { TouchableOpacity, View } from "react-native";
import { Overlay } from "react-native-elements";
import Text from "@app/atoms/Text";
import ListInputStyles from "@app/components/organisms/ListInput/styles";
import uuid from "react-native-uuid";

type Props = {
  index: number;
  visible: boolean;
  toggleOverlay(): void;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const VariationModal: FC<Props> = (props) => {
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

  return (
    <Overlay
      isVisible={visible}
      overlayStyle={{
        height: 250,
        width: DIMENS.screenWidth,
        position: "absolute",
        top: "20%",
        padding: 24,
      }}
      onBackdropPress={toggleOverlay}>
      <TouchableOpacity
        style={{ alignItems: "flex-end" }}
        onPress={() => setVisible(false)}>
        <AntDesign name="close" size={24} color="black" />
      </TouchableOpacity>

      {/** Variation Image picker */}
      {imageSwitchEnabled && (
        <View style={{ alignItems: "flex-start" }}>
          <ImagePicker
            variation={4}
            uri={imageUrl}
            onChange={handleImageChange}
          />
        </View>
      )}

      {/** Option Name */}
      <View style={{ marginTop: imageSwitchEnabled ? 48 : 0, flexGrow: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <Text
            text="Option Name"
            textStyle={{ marginRight: 2, fontSize: 13.33, lineHeight: 16 }}
          />

          <Text
            text={`(${optionNameLength}/${MAX_LENGTH})`}
            textStyle={{
              ...theme.textListItem,
              fontWeight: "400",
              color: theme.colors.dark10,
              marginLeft: 2,
            }}
          />
          <Text text="*" textStyle={{ color: theme.colors.red5 }} />
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
