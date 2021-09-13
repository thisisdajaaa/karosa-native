/**
 *
 * Basket
 * @format
 *
 */

import React, { FC, useCallback, Fragment } from "react";
import { useFormikContext } from "formik";
import { FlatList, KeyboardAvoidingView, View } from "react-native";
import Header from "@app/molecules/Header";
import { theme } from "@app/styles";
import { BasketContext } from "@app/redux/shop/models";
import Text from "@app/atoms/Text";
import Image from "@app/atoms/Image";
import { getPlatform } from "@app/utils";

import BasketStyles from "./styles";
import { ListItem } from "react-native-elements";
import FormCheckbox from "@app/molecules/FormCheckbox";
import Icon from "@app/atoms/Icon";

const BasketTemplate: FC = () => {
  const { values } = useFormikContext<BasketContext>();

  const isIOS = getPlatform.getInstance() === "ios";

  const keyExtractor = useCallback((_, key) => key.toString(), []);

  return (
    <>
      <Header
        hasBottomDivider
        leftComponent={{
          icon: "arrow-back",
          color: theme.colors.primary,
          onPress: () => 0,
        }}
        centerComponent={{
          text: "Basket",
          style: BasketStyles.txtHeader,
        }}
      />
      <KeyboardAvoidingView
        style={BasketStyles.container}
        behavior={isIOS ? "padding" : undefined}>
        <FlatList
          keyExtractor={keyExtractor}
          data={values.storeData}
          renderItem={({ item, index }) => (
            <>
              {/** Store Name */}
              <ListItem>
                <ListItem.Content>
                  <FormCheckbox
                    name={`storeData[${index}].isChecked`}
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
              {item?.items.map((storeItem, key) => (
                <ListItem.Swipeable
                  key={Number(storeItem.id)}
                  bottomDivider={key === item.items.length - 1 && true}>
                  <View
                    style={{ flexDirection: "row", alignItems: "flex-start" }}>
                    <FormCheckbox
                      name={`storeData[${index}].items[${key}].isChecked`}
                      label={<Fragment />}
                    />
                    <View style={{ marginLeft: 10 }}>
                      <Image
                        source={{ uri: storeItem.image }}
                        imageStyle={{ height: 66, width: 66 }}
                        resizeMode="cover"
                      />
                    </View>
                    <View style={{ marginLeft: 10, flexDirection: "column" }}>
                      <Text text={storeItem.name} numberOfLines={2} />
                      <Text text={storeItem.name} numberOfLines={2} />
                    </View>
                  </View>
                </ListItem.Swipeable>
              ))}
            </>
          )}
        />
      </KeyboardAvoidingView>
    </>
  );
};

export default BasketTemplate;
