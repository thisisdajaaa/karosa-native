import React, { FC, Fragment } from "react";
import { View } from "react-native";
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
import Price from "./Price";

type Props = {
  item: StoreData;
  storeIndex: number;
};

const BasketItem: FC<Props> = (props) => {
  const { item, storeIndex } = props;

  const { values, setValues } = useFormikContext<BasketContext>();

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

  const gg: any[] = [];

  const handleItemCheck = (storeIndex: number, storeKey: number) => {
    values.storeData.forEach((store) => {
      if (!store.items[storeKey].isChecked)
        gg.push(!store.items[storeKey].isChecked);
    });
    console.log(gg);
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
        <ListItem
          key={Number(storeItem.id)}
          bottomDivider={storeKey === item.items.length - 1}>
          <View style={{ flexDirection: "column" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
              }}>
              <FormCheckbox
                name={`storeData[${storeIndex}].items[${storeKey}].isChecked`}
                onCheck={() => handleItemCheck(storeIndex, Number(storeKey))}
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
                <Price
                  index={storeIndex}
                  storeItemKey={storeKey}
                  currentPrice={storeItem.price}
                />
              </View>

              <FormQuantity
                name={`storeData[${storeIndex}].items[${storeKey}].quantity`}
              />
            </View>
          </View>
        </ListItem>
      ))}
    </>
  );
};

export default BasketItem;
