/**
 *
 * ProductVariation
 * @format
 *
 */

import React, { FC } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { DIMENS, theme } from "@app/styles";
import { getPlatform } from "@app/utils";
import Header from "@app/molecules/Header";
import FormButton from "@app/molecules/FormButton";
import Text from "@app/atoms/Text";

import type { PropsType } from "./types";
import ProductVariationStyles from "./styles";
import { ListItem, Overlay } from "react-native-elements";
import FormInput from "@app/components/molecules/FormInput";
import FormSwitch from "@app/components/molecules/FormSwitch";
import ValidationMessage from "@app/components/molecules/ValidationMessage";
import { AntDesign } from "@expo/vector-icons";
import Button from "@app/atoms/Button";
import { useFormikContext } from "formik";
import { VariationForm } from "@app/redux/shop/models";

const ProductVariationTemplate: FC<PropsType> = (props) => {
  const { onBack } = props;

  const { values } = useFormikContext<VariationForm>();

  const [visible, setVisible] = React.useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const isIOS = getPlatform.getInstance() === "ios";

  const getHeader = () => {
    return (
      <Header
        hasBottomDivider
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: onBack,
        }}
        centerComponent={{
          text: "Variation",
          style: ProductVariationStyles.txtHeader,
        }}
      />
    );
  };

  return (
    <>
      <>{getHeader()}</>
      <KeyboardAvoidingView
        style={ProductVariationStyles.container}
        behavior={isIOS ? "padding" : undefined}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <>
            <ListItem>
              <ListItem.Content
                style={{
                  flexDirection: "column",
                  height: DIMENS.screenHeight * 0.028,
                }}
              />
            </ListItem>
            {values.variationData.map((_value) => (
              <>
                <ListItem bottomDivider>
                  <ListItem.Content
                    style={{
                      flexDirection: "column",
                      height: DIMENS.screenHeight * 0.028,
                    }}>
                    <ListItem.Content style={{ flexDirection: "row" }}>
                      <ListItem.Content
                        style={{ position: "relative", top: -2 }}>
                        <FormInput
                          name={`variationData[]`}
                          placeholder="Set Variation Name"
                          placeholderColor={theme.colors.dark10}
                          numberOfLines={1}
                          inputStyle={{
                            ...theme.textRegular,
                            textAlign: "left",
                            color: theme.colors.dark20,
                            fontWeight: "400",
                          }}
                          inputContainerStyle={{
                            borderWidth: 0,
                            borderBottomWidth: 0,
                            padding: 0,
                          }}
                        />
                      </ListItem.Content>

                      <Text
                        text="Edit"
                        textStyle={{
                          ...theme.textRegular,
                          color: theme.colors.primary,
                          fontWeight: "400",
                        }}
                      />
                    </ListItem.Content>
                  </ListItem.Content>
                </ListItem>

                {/** Variation switch */}
                <ListItem bottomDivider>
                  <ListItem.Content style={{ flexDirection: "column" }}>
                    <View
                      style={{
                        height: DIMENS.screenHeight * 0.028,
                        flexDirection: "row",
                        alignItems: "center",
                      }}>
                      <View style={{ flexDirection: "column" }}>
                        <Text
                          text="Add image to variation"
                          textStyle={{
                            ...theme.textLight,
                            color: theme.colors.black,
                            textAlign: "left",
                          }}
                        />
                        <Text
                          text="If toggle is on, images are required."
                          textStyle={{
                            ...theme.textSmall,
                            color: theme.colors.light20,
                            textAlign: "left",
                          }}
                        />
                      </View>

                      <ListItem.Content
                        style={{ marginTop: 10, alignItems: "flex-end" }}>
                        <FormSwitch name="wat" />
                      </ListItem.Content>
                    </View>
                    <ValidationMessage name="wat" />
                  </ListItem.Content>
                </ListItem>

                {/** Variation images */}
                <View
                  style={{
                    height: 108,
                    backgroundColor: theme.colors.white,
                    paddingHorizontal: 14,
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}>
                  {/** Variation List */}
                  <View style={{ flexDirection: "row" }}>
                    <Button
                      title="+ Add"
                      type="outline"
                      onPress={toggleOverlay}
                      containerStyle={{
                        width: 70,
                      }}
                      buttonStyle={{
                        backgroundColor: "white",
                        borderColor: theme.colors.primary,
                        borderWidth: 1,
                      }}
                      titleStyle={{
                        ...theme.textLight,
                        color: theme.colors.black,
                      }}
                    />
                  </View>
                </View>
                <Overlay
                  isVisible={visible}
                  overlayStyle={{
                    height: 250,
                    width: DIMENS.screenWidth,
                    position: "absolute",
                    top: "20%",
                  }}
                  onBackdropPress={toggleOverlay}>
                  <TouchableOpacity
                    style={{ alignItems: "flex-end" }}
                    onPress={() => setVisible(false)}>
                    <AntDesign name="close" size={24} color="black" />
                  </TouchableOpacity>
                </Overlay>
              </>
            ))}
          </>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={ProductVariationStyles.buttonContainer}>
        <FormButton title="Set Stock and Price" />
      </View>
    </>
  );
};

export default ProductVariationTemplate;
