import React, { FC, Fragment, useEffect, useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { theme } from "@app/styles";
import { BasketContext, StoreData } from "@app/redux/shop/models";
import Text from "@app/atoms/Text";
import Image from "@app/atoms/Image";
import { useFormikContext } from "formik";

import { ListItem } from "react-native-elements";
import FormCheckbox from "@app/molecules/FormCheckbox";
import Icon from "@app/atoms/Icon";
import FormPicker from "@app/molecules/FormPicker";
import FormQuantity from "@app/molecules/FormQuantity";
import BasketItemPrice from "./BasketItemPrice";
import { Swipeable } from "react-native-gesture-handler";
import { isEmpty } from "ramda";

type Props = {
  item: StoreData;
  storeIndex: number;
};

const BasketItem: FC<Props> = (props) => {
  const { item, storeIndex } = props;

  const { values, setValues } = useFormikContext<BasketContext>();

  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleStoreCheck = (index: number) => {
    const newStoreData: StoreData[] = values.storeData.map((store) => {
      if (Number(store.id) === index) {
        return {
          ...store,
          isChecked: !store.isChecked,
          items: store.items.map((item) => {
            return {
              ...item,
              isChecked: !store.isChecked,
            };
          }),
        };
      }

      return {
        ...store,
      };
    });

    setValues({
      ...values.storeData,
      storeData: newStoreData,
    });
  };

  const onToggleStoreCheck = (isChecked: boolean) => {
    const newStoreData: StoreData[] = values.storeData.map((store) => {
      if (Number(store.id) === Number(values.storeData[storeIndex].id)) {
        return {
          ...store,
          isChecked,
        };
      }

      return {
        ...store,
      };
    });

    setValues({
      ...values.storeData,
      storeData: newStoreData,
    });
  };

  const handleRemove = (storeKey: number) => {
    const newStoreData: StoreData[] = values.storeData.map((store) => {
      if (Number(store.id) === Number(values.storeData[storeIndex].id)) {
        return {
          ...store,
          items: store.items.filter(
            (item) =>
              Number(item.id) !==
              Number(values.storeData[storeIndex].items[storeKey].id)
          ),
        };
      }

      return {
        ...store,
      };
    });

    const filteredStoreData: StoreData[] = newStoreData.filter(
      (store) => !isEmpty(store.items)
    );

    setValues({
      ...values.storeData,
      storeData: filteredStoreData,
    });
  };

  useEffect(() => {
    const mapStoreCheck = values.storeData[storeIndex].items.map(
      (item) => item.isChecked
    );

    const isStoreItemsChecked = mapStoreCheck.every((checked) => checked);

    isStoreItemsChecked ? onToggleStoreCheck(true) : onToggleStoreCheck(false);
  }, [isClicked]);

  const disableIncrement = (storeKey: number) => {
    const quantity = values.storeData[storeIndex].items[storeKey].quantity;
    const stock = values.storeData[storeIndex].items[storeKey].stock;

    return quantity >= stock;
  };

  return (
    <>
      {/** Store Name */}
      <ListItem>
        <ListItem.Content>
          <FormCheckbox
            name={`storeData[${storeIndex}].isChecked`}
            onCheck={() => handleStoreCheck(Number(item.id))}
            label={
              <>
                <Icon
                  group="basket"
                  name="store"
                  height={24}
                  width={24}
                  extraStyle={{
                    marginHorizontal: 8,
                  }}
                />
                <Text
                  text={item.storeName}
                  textStyle={{
                    ...theme.textSemiBold,
                    fontWeight: "500",
                  }}
                />
              </>
            }
          />
        </ListItem.Content>
      </ListItem>

      {/** Store Items */}
      {item.items.map((storeItem, storeKey) => (
        <Swipeable
          renderRightActions={() => (
            <TouchableWithoutFeedback onPress={() => handleRemove(storeKey)}>
              <View
                style={{
                  backgroundColor: theme.colors.gold15,
                  width: 96,
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Icon group="basket" name="trash" height={24} width={24} />
                <Text
                  text="Delete"
                  textStyle={{
                    ...theme.textRegular,
                    color: theme.colors.primary,
                    marginTop: 8,
                  }}
                />
              </View>
            </TouchableWithoutFeedback>
          )}
          key={Number(storeItem.id)}>
          <ListItem bottomDivider={storeKey === item.items.length - 1}>
            <View style={{ flexDirection: "column" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-start",
                }}>
                <FormCheckbox
                  name={`storeData[${storeIndex}].items[${storeKey}].isChecked`}
                  onCheck={() => setIsClicked((prev) => !prev)}
                  label={<Fragment />}
                />
                <View style={{ marginLeft: 10 }}>
                  <Image
                    source={{ uri: storeItem.image }}
                    imageStyle={{ height: 75, width: 75 }}
                    resizeMode="cover"
                  />
                </View>
                <View
                  style={{
                    marginLeft: 10,
                    flexDirection: "column",
                    width: "60%",
                  }}>
                  <Text
                    text={storeItem.name}
                    numberOfLines={2}
                    textStyle={{
                      marginBottom: 8,
                    }}
                  />
                  <FormPicker
                    data={storeItem.picker}
                    placeholder={""}
                    name={`storeData[${storeIndex}].items[${storeKey}].selectedPicker`}
                  />
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginTop: 8,
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                <View style={{ marginLeft: "auto", marginRight: 68 }}>
                  <BasketItemPrice
                    index={storeIndex}
                    storeItemKey={storeKey}
                    currentPrice={Number(storeItem.price)}
                  />
                </View>

                <FormQuantity
                  onDecrement={() => alert("G")}
                  disableIncrement={disableIncrement(storeKey)}
                  name={`storeData[${storeIndex}].items[${storeKey}].quantity`}
                />
              </View>
            </View>
          </ListItem>
        </Swipeable>
      ))}
    </>
  );
};

export default BasketItem;
