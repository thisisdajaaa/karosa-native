import React from "react";
import { TouchableOpacity, View } from "react-native";
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

const NotificationScreen: React.FC = () => {
  const screenProps: ScreenProps = {
    header: {
      title: "Notification",
    },
    customStyles: {
      backgroundColor: "green",
    },
  };

  const formikBag = useFormik({
    initialValues: { sample: "", wat: false },
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit: () => {},
  });

  const [visible, setVisible] = React.useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <Screen {...screenProps}>
      <FormikProvider value={formikBag}>
        {/** Variation Name */}
        <ListItem bottomDivider>
          <ListItem.Content
            style={{
              flexDirection: "column",
              height: DIMENS.screenHeight * 0.028,
            }}>
            <ListItem.Content style={{ flexDirection: "row" }}>
              <ListItem.Content style={{ position: "relative", top: -2 }}>
                <FormInput
                  name="sample"
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
            <ValidationMessage name="sample" />
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
      </FormikProvider>
    </Screen>
  );
};

export default NotificationScreen;
