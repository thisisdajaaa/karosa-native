import React, { FC } from "react";

import { FlatList, View } from "react-native";
import { DIMENS, theme } from "@app/styles";
import Text from "@app/atoms/Text";
import Image from "@app/atoms/Image";
import { ListItem } from "react-native-elements";
import FormInput from "@app/components/molecules/FormInput";
import FormSwitch from "@app/components/molecules/FormSwitch";
import ValidationMessage from "@app/components/molecules/ValidationMessage";
import Button from "@app/atoms/Button";
import { isEmpty } from "ramda";
import { VariationForm } from "@app/redux/shop/models";
import VariationModal from "./VariationModal";
import { ENUM } from "@app/constants";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Icon from "@app/atoms/Icon";
import { useFormikContext } from "formik";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  index: number;
  values: VariationForm;
};

const NewVariation: FC<Props> = (props) => {
  const { index } = props;

  const keyExtractor = React.useCallback((_, index) => index.toString(), []);

  const { values, setValues } = useFormikContext<VariationForm>();

  const optionsData = values.variationData[index].options;
  const hasImage = values.variationData[index].hasImage;

  const [visible, setVisible] = React.useState<boolean>(false);
  const [mode, setMode] = React.useState<ENUM.VariationMode>(
    ENUM.VariationMode.Edit
  );

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const removeVariationItem = () => {
    const filteredVariationData = values.variationData.filter(
      (value) => value.id !== values.variationData[index].id
    );

    setValues({
      ...values.variationData,
      variationData: filteredVariationData,
    });
  };

  {
    /** Remove option */
  }
  const removeVariationOption = () => {
    const newArray = [...values.variationData];

    const filteredVariationData = values.variationData[index].options.filter(
      (value, key) => value.id !== values.variationData[index].options[key].id
    );

    setValues({
      ...values.variationData,
      variationData: filteredVariationData,
    });
  };

  return (
    <>
      {/** Spacer */}
      <View
        style={{
          marginTop: 16,
        }}
      />

      <ListItem bottomDivider key={index}>
        <ListItem.Content
          style={{
            flexDirection: "column",
            height: DIMENS.screenHeight * 0.028,
          }}>
          <ListItem.Content style={{ flexDirection: "row" }}>
            <ListItem.Content>
              {mode === ENUM.VariationMode.Edit ? (
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}>
                  <TouchableWithoutFeedback
                    onPress={removeVariationItem}
                    style={{ marginRight: 8 }}>
                    <Icon
                      group="products"
                      name="deleteVariation"
                      height={16}
                      width={16}
                    />
                  </TouchableWithoutFeedback>

                  <FormInput
                    name={`variationData[${index}].variationName`}
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
                      marginBottom: 1,
                    }}
                  />
                </View>
              ) : (
                <Text
                  text={values.variationData[index].variationName}
                  textStyle={{
                    ...theme.textRegular,
                    color: theme.colors.dark20,
                    fontWeight: "400",
                  }}
                />
              )}
            </ListItem.Content>

            {mode === ENUM.VariationMode.Edit ? (
              <TouchableWithoutFeedback
                onPress={() => setMode(ENUM.VariationMode.Done)}>
                <Text
                  text="Done"
                  textStyle={{
                    ...theme.textRegular,
                    color: theme.colors.primary,
                    fontWeight: "400",
                  }}
                />
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback
                onPress={() => setMode(ENUM.VariationMode.Edit)}>
                <Text
                  text="Edit"
                  textStyle={{
                    ...theme.textRegular,
                    color: theme.colors.primary,
                    fontWeight: "400",
                  }}
                />
              </TouchableWithoutFeedback>
            )}
          </ListItem.Content>
          <ValidationMessage name={`variationData[${index}].variationName`} />
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

            <ListItem.Content style={{ marginTop: 10, alignItems: "flex-end" }}>
              <FormSwitch name={`variationData[${index}].hasImage`} />
            </ListItem.Content>
          </View>
          <ValidationMessage name={`variationData[${index}].hasImage`} />
        </ListItem.Content>
      </ListItem>

      {/** Variation images */}
      <View
        style={{
          height: 130,
          backgroundColor: theme.colors.white,
          paddingHorizontal: 14,
          justifyContent: "center",
          alignItems: "flex-start",
        }}>
        {/** Variation List */}
        <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
          <View
            style={{
              paddingVertical: 12,
              flexDirection: "row",
              alignItems: "flex-start",
            }}>
            {optionsData.length < 3 &&
              optionsData.map(({ image, optionName }, index) => (
                <View
                  key={index}
                  style={{
                    width: 82,
                    borderWidth: 0.5,
                    borderStyle: "solid",
                    borderColor: theme.colors.primary,
                    borderRadius: 5,
                    justifyContent: "center",
                    position: "relative",
                    padding: image && hasImage ? 0 : 8,
                    marginRight: 12,
                    zIndex: -1,
                    backgroundColor:
                      image && hasImage
                        ? theme.colors.white
                        : theme.colors.primary,
                  }}>
                  {mode === ENUM.VariationMode.Edit && (
                    <View
                      style={{
                        position: "absolute",
                        padding: 5,
                        right: -12,
                        top: -10,
                        zIndex: 99,
                        borderRadius: 100,
                        backgroundColor: theme.colors.red15,
                      }}>
                      <AntDesign
                        name="close"
                        style={{ color: theme.colors.white }}
                      />
                    </View>
                  )}

                  {image && hasImage ? (
                    <>
                      <Image
                        source={{ uri: image as string }}
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
                          text={optionName}
                          textStyle={{
                            ...theme.textSmall,
                            color: theme.colors.white,
                            textAlign: "center",
                          }}
                        />
                      </View>
                    </>
                  ) : (
                    <View
                      style={{
                        paddingHorizontal: 8,
                        paddingVertical: 2,
                        backgroundColor: theme.colors.primary,
                      }}>
                      <Text
                        text={optionName}
                        textStyle={{
                          ...theme.textLight,
                          color: theme.colors.white,
                          textAlign: "center",
                        }}
                      />
                    </View>
                  )}
                </View>
              ))}
          </View>

          {!isEmpty(optionsData) && optionsData.length >= 3 && (
            <FlatList
              keyExtractor={keyExtractor}
              data={optionsData}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingVertical: 12 }}
              renderItem={({ item }) => (
                <View
                  style={{
                    width: 82,
                    borderWidth: 0.5,
                    borderStyle: "solid",
                    borderColor: theme.colors.primary,
                    borderRadius: 5,
                    justifyContent: "center",
                    padding: item.image && hasImage ? 0 : 8,
                    marginRight: 12,
                    alignSelf: "flex-start",
                    backgroundColor:
                      item.image && hasImage
                        ? theme.colors.white
                        : theme.colors.primary,
                  }}>
                  {mode === ENUM.VariationMode.Edit && (
                    <View
                      style={{
                        position: "absolute",
                        padding: 5,
                        right: -12,
                        top: -10,
                        zIndex: 99,
                        borderRadius: 100,
                        backgroundColor: theme.colors.red15,
                      }}>
                      <AntDesign
                        name="close"
                        style={{ color: theme.colors.white }}
                      />
                    </View>
                  )}

                  {item.image && hasImage ? (
                    <>
                      <Image
                        source={{ uri: item.image as string }}
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
                          text={item.optionName}
                          textStyle={{
                            ...theme.textSmall,
                            color: theme.colors.white,
                            textAlign: "center",
                          }}
                        />
                      </View>
                    </>
                  ) : (
                    <View
                      style={{
                        paddingHorizontal: 8,
                        paddingVertical: 2,
                        backgroundColor: theme.colors.primary,
                      }}>
                      <Text
                        text={item.optionName}
                        textStyle={{
                          ...theme.textLight,
                          color: theme.colors.white,
                          textAlign: "center",
                        }}
                      />
                    </View>
                  )}
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
              marginLeft: !isEmpty(optionsData) ? 12 : 0,
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

      <VariationModal
        index={index}
        toggleOverlay={toggleOverlay}
        setVisible={setVisible}
        visible={visible}
      />
    </>
  );
};

export default NewVariation;
