/**
 *
 * @format
 *
 */

import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

const CategoryStyles = StyleSheet.create({
  categoryContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  categoryCircle: {
    height: 72,
    width: 72,
    backgroundColor: theme.colors.dark10,
    borderRadius: 100,
  },
  nameContainer: {
    marginTop: 4,
    width: 100,
  },
  txtName: {
    ...theme.textLight,
    textAlign: "center",
    fontWeight: "300",
  },
});

export default CategoryStyles;
