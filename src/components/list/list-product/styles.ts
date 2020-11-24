import { StyleSheet } from "react-native";
import { theme } from "@app/styles";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: theme.colors.white,
  },
  flexWrapping: {
    flexDirection: "column",
  },
  subContainerOne: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 15,
  },
  image: {
    width: 91,
    height: 91,
  },
  topContainer: {
    flexDirection: "column",
    marginLeft: 17,
  },
  txtName: {
    ...theme.textRegular,
    marginBottom: 15,
    fontWeight: "500",
    fontStyle: "normal",
  },
  txtPrice: {
    ...theme.textRegular,
    marginBottom: 15,
    fontWeight: "400",
    fontStyle: "normal",
  },
  badgeContainer: {
    flexDirection: "row",
  },
  wholesaleContainer: {
    backgroundColor: theme.colors.primary,
    height: 18,
    width: 66,
    borderRadius: 3,
  },
  txtBadge: {
    ...theme.textLight,
    fontWeight: "700",
    color: theme.colors.white,
    textAlign: "center",
    marginTop: 2,
  },
  discountContainer: {
    backgroundColor: theme.colors.orange10,
    height: 18,
    width: 40,
    borderRadius: 3,
    marginLeft: 5,
  },
  subContainerTwo: { flex: 2, marginBottom: 15 },
  midContainerOne: {
    flexDirection: "row",
    marginBottom: 8,
  },
  variationContainerOne: {
    flexDirection: "row",
    position: "absolute",
    left: 0,
  },
  txtLabel: {
    ...theme.textRegular,
    fontWeight: "400",
    fontStyle: "normal",
  },
  txtValue: {
    ...theme.textRegular,
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: 16,
    marginLeft: 6,
  },
  variationContainerTwo: {
    flexDirection: "row",
    position: "absolute",
    left: 148,
  },
  space: { marginTop: 9, marginBottom: 9 },
  midContainerTwo: {
    flexDirection: "row",
    marginBottom: 25,
  },
  botContainer: {
    flex: 3,
    flexDirection: "row",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  discontinueIcon: {
    fontSize: 14,
    marginTop: 3,
    color: theme.colors.dark30,
  },
  txtDiscontinue: {
    marginLeft: 8,
  },
  editIcon: {
    fontSize: 16,
    marginTop: 3,
    marginLeft: 15,
    color: theme.colors.dark30,
  },
  txtEdit: {
    marginLeft: 8,
  },
});
