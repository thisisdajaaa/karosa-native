/**
 *
 * BaseHeader
 * @format
 *
 */

import React, { FC } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { View, TouchableOpacity } from "react-native";
// import { Separator } from "@app/components/separator";

// import { BaseText } from "../base-text";
import Text from "@app/atoms/Text";
import Divider from "@app/atoms/Divider";

import { styles } from "./styles";
import { Props } from "./types";

const BaseHeader: FC<Props> = ({
  title,
  iconName,
  text,
  press,
  customStyles,
  borderBottom = true,
}) => {
  return (
    <React.Fragment>
      <View style={styles.mainContainer}>
        {text?.left && (
          // <BaseText customStyles={[styles.txtLeft, customStyles?.left]}>
          //   {text.left}
          // </BaseText>
          <Text
            text={text.left}
            textStyle={[styles.txtLeft, customStyles?.left]}
          />
        )}
        {iconName && (
          <TouchableOpacity style={styles.leftContainer} onPress={press?.left}>
            <MaterialIcons name={iconName} style={styles.icon} />
          </TouchableOpacity>
        )}
        {/* <BaseText customStyles={[styles.title, customStyles?.main]}>
          {title}
        </BaseText> */}
        <Text
          text={title || ""}
          textStyle={[styles.title, customStyles?.main]}
        />
        {text?.right && press?.right && (
          <TouchableOpacity style={styles.rightContainer} onPress={press.right}>
            {/* <BaseText customStyles={[styles.txtRight, customStyles?.right]}>
              {text.right}
            </BaseText> */}
            <Text
              text={text.right}
              textStyle={[styles.txtRight, customStyles?.right]}
            />
          </TouchableOpacity>
        )}
      </View>
      {borderBottom && <Divider />}
    </React.Fragment>
  );
};

export default BaseHeader;
