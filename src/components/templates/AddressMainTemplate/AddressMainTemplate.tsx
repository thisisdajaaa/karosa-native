/**
 *
 * AddressMainTemplate
 * @format
 *
 */

import React, { FC } from "react";

import type { PropsType } from "./types";
import { Button, View } from "react-native";
import Header from "@app/components/molecules/Header";
import Text from "@app/atoms/Text";
import Icon from "@app/atoms/Icon";
import { useNavigation } from "@react-navigation/core";
import routes from "@app/navigators/routes";

const AddressMainTemplate: FC<PropsType> = (props) => {
  const {} = props;
  const { goBack, navigate } = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <Header
        // containerStyle={ProfileStyles.headerContainer}
        barStyle="light-content"
        leftComponent={{
          icon: "arrow-back",
          color: "green",
          onPress: goBack,
        }}
        centerComponent={<Text text={"Address"} />}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
        }}>
        <Icon
          group={"accountSettings"}
          name={"illustration_address"}
          width={150}
          height={150}
        />
        <Text text={"No added address yet"} textStyle={{ marginTop: 20 }} />
      </View>

      <Button
        title="Add New Address"
        onPress={() => {
          navigate("Stack", {
            screen: routes.ACCOUNTS_NEW_ADDRESS,
            params: {
              map: "test",
            },
          });
        }}></Button>
    </View>
  );
};

export default AddressMainTemplate;
