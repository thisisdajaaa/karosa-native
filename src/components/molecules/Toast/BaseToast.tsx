import React, { FC } from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "@app/atoms/Text";
import type { BaseToastProps } from "./types";
import { NUM_OF_LINES } from "./config";
import ToastStyles from "./styles";

const BaseToast: FC<BaseToastProps> = (props) => {
  const {
    title,
    message,
    onPress,
    renderTitle,
    renderMessage,
    renderIcon,
    iconElement,
  } = props;

  const inner = (
    <View style={ToastStyles.base}>
      {renderIcon ? renderIcon(props) : iconElement}

      <View>
        {renderTitle
          ? renderTitle(props)
          : title !== undefined && (
              <View>
                <Text
                  textStyle={ToastStyles.title}
                  numberOfLines={NUM_OF_LINES}
                  text={title}
                />
              </View>
            )}
        {renderMessage
          ? renderMessage(props)
          : message !== undefined && (
              <View>
                <Text
                  textStyle={ToastStyles.message}
                  numberOfLines={NUM_OF_LINES}
                  text={message}
                />
              </View>
            )}
      </View>
    </View>
  );

  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{inner}</TouchableOpacity>;
  }

  return inner;
};

export default BaseToast;
