import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
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

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

const NotificationScreen: React.FC = () => {
  const screenProps: ScreenProps = {
    header: {
      title: "Notification",
    },
    customStyles: {
      backgroundColor: "green",
    },
  };

  const keyExtractor = React.useCallback((_, index) => index.toString(), []);

  const formikBag = useFormik({
    initialValues: { sample: "", wat: false, gg: "", img: "" },
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
            height: 150,
            backgroundColor: theme.colors.white,
            paddingHorizontal: 14,
            paddingTop: 16,
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}>
          {/** Variation List */}
          <View style={{ flexDirection: "row" }}>
            {!isEmpty(data) &&
              data.length < 3 &&
              data.map((_, index) => (
                <View
                  key={index}
                  style={{
                    width: 82,
                    borderWidth: 0.5,
                    borderStyle: "solid",
                    borderColor: theme.colors.primary,
                    borderRadius: 5,
                    overflow: "hidden",
                    justifyContent: "center",
                    marginRight: 12,
                  }}>
                  <Image
                    source={require("../../../assets/hinata.png")}
                    imageStyle={{
                      width: "100%",
                      height: 70,
                      flexGrow: 1,
                      resizeMode: "stretch",
                      opacity: 0.5,
                    }}
                  />

                  <View
                    style={{
                      paddingHorizontal: 8,
                      paddingVertical: 2,
                      backgroundColor: theme.colors.primary,
                      borderBottomLeftRadius: 5,
                      borderBottomRightRadius: 5,
                    }}>
                    <Text
                      text="Add Image"
                      textStyle={{
                        color: theme.colors.white,
                        ...theme.textLight,
                      }}
                    />
                  </View>
                </View>
              ))}

            {!isEmpty(data) && data.length >= 3 && (
              <FlatList
                keyExtractor={keyExtractor}
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }: any) => (
                  <View
                    style={{
                      width: 82,
                      borderWidth: 0.5,
                      borderStyle: "solid",
                      borderColor: theme.colors.primary,
                      borderRadius: 5,
                      overflow: "hidden",
                      justifyContent: "center",
                      marginRight: 12,
                    }}>
                    <Image
                      source={require("../../../assets/hinata.png")}
                      imageStyle={{
                        width: "100%",
                        height: 70,
                        flexGrow: 1,
                        resizeMode: "stretch",
                        opacity: 0.5,
                      }}
                    />

                    <View
                      style={{
                        paddingHorizontal: 8,
                        paddingVertical: 2,
                        backgroundColor: theme.colors.primary,
                        borderBottomLeftRadius: 5,
                        borderBottomRightRadius: 5,
                      }}>
                      <Text
                        text="Add Image"
                        textStyle={{
                          color: theme.colors.white,
                          ...theme.textLight,
                        }}
                      />
                    </View>
                  </View>
                )}
              />
            )}

            <Button
              title="+ Add"
              type="outline"
              onPress={toggleOverlay}
              containerStyle={{
                width: 70,
                marginLeft: !isEmpty(data) ? 12 : 0,
                height: 50,
                alignSelf: "center",
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
            padding: 24,
          }}
          onBackdropPress={toggleOverlay}>
          <TouchableOpacity
            style={{ alignItems: "flex-end" }}
            onPress={() => setVisible(false)}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>

          {/** Variation Image picker */}
          <View style={{ alignItems: "flex-start" }}>
            <FormImagePicker name="img" variation={4} />
          </View>

          {/** Option Name */}
          <View style={{ marginTop: 48, flexGrow: 1 }}>
            <ListInput
              name="gg"
              placeholder="Enter Option Name"
              label="Option Name"
              maxLen={20}
              hasBottomDivider={false}
              required
              variation={4}
            />
          </View>
        </Overlay>
      </FormikProvider>
    </Screen>
  );
};

export default NotificationScreen;
