/**
 *
 * BasketEmpty
 * @format
 *
 */

import React, { FC } from "react";

import type { PropsType } from "./types";
import BasketEmptyStyles from "./styles";
import { View, Image } from "react-native";
import Text from "@app/atoms/Text";
import Button from "@app/atoms/Button";
import { useNavigation } from "@react-navigation/native";
import routes from "@app/navigators/routes";

const BasketEmpty: FC<PropsType> = (props) => {
  const {} = props;
  const { navigate } = useNavigation();

  return (
    <View>
      <View style={BasketEmptyStyles.container}>
        <Image
          style={BasketEmptyStyles.image}
          source={require("../../../../assets/empty2.png")}
        />
        <View style={BasketEmptyStyles.txtContainer}>
          <Text
            textStyle={BasketEmptyStyles.txt}
            text={
              "Continue shopping to enjoy discounts. Refill your basket now!"
            }
          />
        </View>
        <View>
          <Button
            title={"Continue Shopping"}
            titleStyle={BasketEmptyStyles.btnTitle}
            type={"clear"}
            buttonStyle={BasketEmptyStyles.btn}
            onPress={() => navigate(routes.HOME)}
          />
        </View>
      </View>
    </View>
  );
};

export default BasketEmpty;
