import { StyleSheet } from "react-native";
import { theme } from "styles";

export const styles = StyleSheet.create({
  addressContainer: {
    backgroundColor: theme.colors.white,
    marginTop: 16,
    width: "100%",
    flexDirection: "column",
  },
  touchable: {
    width: "100%",
    marginTop: 16,
    backgroundColor: theme.colors.white,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  txtnewAdd: {
    fontWeight: "400",
    ...theme.textRegular,
    color: theme.colors.primary,
  },
  forIcon: {
    marginVertical: 5,
  },
  materialColor: {
    color: theme.colors.dark10,
  },
});
