/* eslint-disable react-native/no-color-literals */
import { theme } from "@app/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    marginTop: 10,
    marginRight: 12,
    marginLeft: 12,
    borderRadius: 10,
    padding: 20,
  },
  deliveryHighlight: {
    color: theme.colors.primary,
  },
  deliverySecondary: { color: "#828282", fontSize: 15 },
  deliveryText: { marginBottom: 10 },
  deliveryTextContainer: { marginLeft: 18 },
  flexDirectionRow: { flexDirection: "row" },
  headerTextStyle: { fontWeight: "bold" },
  trackingHeader: {
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingBottom: 11,
    borderColor: theme.colors.light10,
    marginBottom: 25,
  },
});
