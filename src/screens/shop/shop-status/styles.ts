import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
  },
  actionContainer: {
    paddingTop: 0,
  },
  txtLabel: { ...theme.textRegular, fontWeight: "400" },
  txtShopStatus: {
    ...theme.textBold,
    marginVertical: 12,
    textAlign: "center",
    fontWeight: "500",
  },
  separator: {
    marginTop: 12,
  },
  spacer: {
    marginTop: 24,
  },
});

export const itemStyle = (bgColor: string) => {
  return StyleSheet.create({
    circle: {
      borderRadius: 50,
      backgroundColor: bgColor,
      height: 16,
      width: 16,
      marginTop: 2,
      marginRight: 12,
    },
  });
};
