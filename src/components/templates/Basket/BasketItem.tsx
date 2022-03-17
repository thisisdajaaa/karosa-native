/**
 *
 * BasketItem
 * @format
 *
 */

import React, { FC, Fragment, useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { useFormikContext } from "formik";
import { Swipeable } from "react-native-gesture-handler";
import { ListItem } from "react-native-elements";
import { BasketContext, StoreData } from "@app/redux/shop/models";
import { useUpdateEffect } from "@app/hooks";
import Text from "@app/atoms/Text";
import Image from "@app/atoms/Image";
import FormCheckbox from "@app/molecules/FormCheckbox";
import Icon from "@app/atoms/Icon";
import FormPicker from "@app/molecules/FormPicker";

import type { BasketItemProps } from "./types";
import { ICON_SIZE, NUM_OF_LINES } from "./config";
import BasketStyles from "./styles";
import BasketItemQuantityPrice from "./BasketItemQuantityPrice";
import { isEmpty } from "lodash";

const BasketItem: FC<BasketItemProps> = (props) => {
  const { item, storeIndex } = props;

  const { values, setValues } = useFormikContext<BasketContext>();

  const [isClicked, setIsClicked] = useState<boolean>(false);

  const storeInfo = values.storeData[storeIndex];

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
      if (Number(store.id) === Number(storeInfo.id)) {
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
    const newStoreData: StoreData[] = values.storeData
      .map((store) => {
        if (Number(store.id) === Number(storeInfo.id)) {
          return {
            ...store,
            items: store.items.filter(
              (item) => Number(item.id) !== Number(storeInfo.items[storeKey].id)
            ),
          };
        }

        return {
          ...store,
        };
      })
      .filter((store) => !isEmpty(store.items));

    setValues({
      storeData: newStoreData,
    });
  };

  useUpdateEffect(() => {
    const mapStoreCheck = storeInfo.items.map((item) => item.isChecked);

    const isStoreItemsChecked = mapStoreCheck.every((checked) => checked);

    isStoreItemsChecked ? onToggleStoreCheck(true) : onToggleStoreCheck(false);
  }, [isClicked]);

  return (
    <>
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
                  height={ICON_SIZE}
                  width={ICON_SIZE}
                  extraStyle={BasketStyles.storeIcon}
                />
                <Text
                  text={item.storeName}
                  textStyle={BasketStyles.txtStoreName}
                />
              </>
            }
          />
        </ListItem.Content>
      </ListItem>

      {item.items.map((storeItem, storeKey) => (
        <Swipeable
          renderRightActions={() => (
            <TouchableWithoutFeedback onPress={() => handleRemove(storeKey)}>
              <View style={BasketStyles.btnDeleteContainer}>
                <Icon
                  group="basket"
                  name="trash"
                  height={ICON_SIZE}
                  width={ICON_SIZE}
                />
                <Text text="Delete" textStyle={BasketStyles.txtDelete} />
              </View>
            </TouchableWithoutFeedback>
          )}
          key={Number(storeItem.id)}
        >
          <ListItem bottomDivider={storeKey === item.items.length - 1}>
            <View style={BasketStyles.flexColumn}>
              <View style={BasketStyles.basketItemBaseContainer}>
                <FormCheckbox
                  name={`storeData[${storeIndex}].items[${storeKey}].isChecked`}
                  onCheck={() => setIsClicked((prev) => !prev)}
                  label={<Fragment />}
                />
                <View style={BasketStyles.basketImageContainer}>
                  <Image
                    source={{ uri: storeItem.image }}
                    imageStyle={BasketStyles.basketImage}
                    resizeMode="cover"
                  />
                </View>
                <View style={BasketStyles.basketItemColumnContainer}>
                  <Text
                    text={storeItem.name}
                    numberOfLines={NUM_OF_LINES}
                    textStyle={BasketStyles.txtBasketItem}
                  />
                  <FormPicker
                    data={storeItem.picker}
                    placeholder={""}
                    name={`storeData[${storeIndex}].items[${storeKey}].selectedPicker`}
                  />
                </View>
              </View>

              <BasketItemQuantityPrice
                index={storeIndex}
                storeItemKey={storeKey}
                handleRemove={() => handleRemove(storeKey)}
              />
            </View>
          </ListItem>
        </Swipeable>
      ))}
    </>
  );
};

export default BasketItem;
