import React from "react";
import { View } from "react-native";

import { BaseText } from "../base-text";

import { Props } from "./types";

export const AccountActions: React.FC<Props> = ({ actions }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        flexDirection: "row",
        paddingLeft: 8,
        paddingRight: 8,
      }}
    >
      {actions.map((action, key) => (
        <View
          key={key}
          style={{ flexDirection: "column", flex: 1, alignItems: "center" }}
        >
          {action.icon}
          <BaseText
            style={{
              fontWeight: "700",
              fontSize: 12,
              lineHeight: 14,
              marginBottom: 12,
              position: "absolute",
              bottom: 5,
            }}
          >
            {action.label}
          </BaseText>
        </View>
      ))}
    </View>
  );
};
